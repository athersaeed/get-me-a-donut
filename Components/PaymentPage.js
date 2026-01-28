"use client";
import React, { useState, useEffect } from "react";
import { fetchuser, fetchPayments } from "@/actions/useractions";

const PaymentPage = ({ username }) => {
  const [paymentForm, setPaymentForm] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  };

  const isInteger = (value) => {
    return !isNaN(value) && value % 1 === 0;
  };

  const handlePresetAmount = (amount) => {
    setPaymentForm({ ...paymentForm, amount: amount });
  };

  const getData = async () => {
    setLoading(true);
    let u = await fetchuser(username);
    setCurrentUser(u);
    let dbPayments = await fetchPayments(username);
    setPayments(dbPayments);
    setLoading(false);
  };

  return (
    <>
      <div className="cover w-full ">
        <img
          className="w-full h-96"
          src={currentUser.coverpic}
          alt="cover photo"
        />
      </div>
      {/* profile photo */}
      <div className="profile flex items-center justify-center gap-4 mx-auto">
        <img
          className="w-16 h-16 object-cover rounded-xl"
          src={currentUser.profilepic}
          alt="profile photo"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">{username}</h1>
          <p className="text-sm text-gray-500">
            Let's help {username} get a donut
          </p>
          <p className="text-sm text-gray-500">
            {payments.length} supporters.{" "}
            <span className="font-bold text-lg ">.</span>{" "}
            {payments.reduce((acc, payment) => acc + payment.amount, 0)} total
            donations
          </p>
        </div>
      </div>
      <div className="payment flex flex-col md:flex-row gap-4 w-full md:w-[80%] mx-auto mt-11">
        <div className="supporters w-full md:w-1/2 bg-slate-900 p-10 rounded-lg">
          {/* Show list of all the supporters asa a leaderboard */}
          <h2 className="text-2xl font-bold text-white my-5">Supporters</h2>
          <ul className="text-white mx-5 text-lg">
            {payments.length === 0 ? (
              <p className="text-center my-5">No payments found</p>
            ) : null}
            {payments.map((payment) => (
              <li key={payment.id} className="my-2 flex gap-2">
                <img
                  width={33}
                  className="object-cover rounded-xl"
                  src="avatar.gif"
                  alt="supporter icon"
                />
                {payment.name} donated{" "}
                <span className="font-bold text-lg">${payment.amount}</span>{" "}
                with a message "{payment.message}"
              </li>
            ))}
          </ul>
        </div>

        <div className="make-payment w-full md:w-1/2 bg-slate-900 p-10 rounded-lg">
          <h2 className="text-2xl font-bold text-white my-5">Make Payment</h2>
          <form
            action="/api/checkout_sessions"
            method="POST"
            className="flex flex-col gap-2"
          >
            <input
              type="text"
              name="name"
              value={paymentForm.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
            />
            <input
              type="text"
              name="message"
              value={paymentForm.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
            />
            <input
              type="text"
              name="amount"
              value={paymentForm.amount}
              onChange={handleChange}
              placeholder="Enter your amount"
              className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
            />
            <input type="hidden" name="username" value={username} />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 my-2 rounded-lg hover:bg-blue-600 transition-all font-bold disabled:bg-gray-500 disabled:cursor-not-allowed"
              disabled={
                !paymentForm.amount ||
                paymentForm.name.trim().length < 3 ||
                paymentForm.message.trim().length < 3 ||
                paymentForm.amount < 1 ||
                paymentForm.amount > 1000 ||
                !paymentForm.amount.trim() ||
                paymentForm.name.trim().length > 20 ||
                paymentForm.message.trim().length > 60 ||
                !isInteger(paymentForm.amount)
              }
            >
              Pay
            </button>
          </form>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handlePresetAmount(10)}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all border border-slate-600"
            >
              $10
            </button>
            <button
              onClick={() => handlePresetAmount(20)}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all border border-slate-600"
            >
              $20
            </button>
            <button
              onClick={() => handlePresetAmount(30)}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all border border-slate-600"
            >
              $30
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
