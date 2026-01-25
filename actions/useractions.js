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
    // fetch all payments for a to_user in decreasing order of amount and flatten object ids
    const payments = await Payment.find({ to_user: username })
      .sort({ amount: -1 })
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
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
