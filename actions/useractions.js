"use server";

import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";

export const fetchuser = async (username) => {
  try {
    await connectDB();
    let u = await User.findOne({ username: username });
    if (!u) {
      return { error: "User not found" };
    }
    let user = u.toObject({ flattenObjectIds: true });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPayments = async (username) => {
  try {
    await connectDB();
    const payments = await Payment.find({ to_user: username, done: true })
      .sort({ amount: -1 })
      .limit(7)
      .lean();
    return payments.map((p) => {
      p._id = p._id.toString();
      return p;
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (data, oldusername) => {
  try {
    await connectDB();
    let newData = data;
    if (data instanceof FormData) {
      newData = Object.fromEntries(data);
    }
    let u = await User.findOne({ username: newData.username });
    if (u && u.username !== oldusername) {
      return { error: "username already exists" };
    }
    await User.updateOne({ email: newData.email }, newData);
    // update all payments for oldusername to newusername
    await Payment.updateMany(
      { to_user: oldusername },
      { to_user: newData.username },
    );
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

export const updatePaymentSuccess = async (payment_id) => {
  try {
    await connectDB();
    await Payment.updateOne({ payment_id: payment_id }, { done: true });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

export const fetchTopCreators = async () => {
  try {
    await connectDB();
    const topUsers = await Payment.aggregate([
      { $match: { done: true } },
      { $group: { _id: "$to_user", totalAmount: { $sum: "$amount" } } },
      { $sort: { totalAmount: -1 } },
      { $limit: 3 },
    ]);

    const usersWithDetails = await Promise.all(
      topUsers.map(async (p) => {
        const user = await User.findOne({ username: p._id });
        return {
          username: p._id,
          totalAmount: p.totalAmount,
          profilepic: user ? user.profilepic : "avatar.gif",
        };
      }),
    );

    return usersWithDetails;
  } catch (error) {
    console.log(error);
    return [];
  }
};
