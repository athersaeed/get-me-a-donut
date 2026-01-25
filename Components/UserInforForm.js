"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { fetchuser, updateProfile } from "@/actions/useractions";

const UserInfoForm = () => {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [form, setForm] = useState({});

  useEffect(() => {
    getData();
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const getData = async () => {
    if (session?.user?.username) {
      const user = await fetchuser(session.user.username);
      setForm(user);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add logic to save the updated profile data to the backend here
    let res = await updateProfile(form, session.user.username);
    if (res.error) {
      alert(res.error);
    } else {
      await update();
      router.push(`/${form.username}`);
    }
  };

  if (!session) {
    return (
      <div className="font-bold text-3xl flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto container py-5">
      <h1 className="text-center text-3xl my-5 font-bold">
        Welcome {session.user.name}, to your Dashboard
      </h1>
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={form.name ? form.name : ""}
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
          />
        </div>

        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={form.email ? form.email : ""}
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
          />
        </div>

        <div className="my-2">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            value={form.username ? form.username : ""}
            name="username"
            id="username"
            type="text"
            placeholder="Enter your username"
            className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
          />
        </div>

        <div className="my-2">
          <label htmlFor="profilepic">Profile Photo</label>
          <input
            onChange={handleChange}
            value={form.profilepic ? form.profilepic : ""}
            name="profilepic"
            id="profilepic"
            type="text"
            placeholder="Enter your profile photo"
            className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
          />
        </div>

        <div className="my-2">
          <label htmlFor="coverpic">Cover Photo</label>
          <input
            onChange={handleChange}
            value={form.coverpic ? form.coverpic : ""}
            name="coverpic"
            id="coverpic"
            type="text"
            placeholder="Enter your cover photo"
            className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
          />
        </div>

        <div className="my-2">
          <label htmlFor="stripePublishableKey">STRPE PUBLISHABLE KEY</label>
          <input
            onChange={handleChange}
            value={form.stripePublishableKey ? form.stripePublishableKey : ""}
            name="stripePublishableKey"
            id="stripePublishableKey"
            type="text"
            placeholder="Enter your STRIPE Publishable Key"
            className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
          />
        </div>

        <div className="my-2">
          <label htmlFor="stripeSecretKey">STRPE SECRET KEY</label>
          <input
            onChange={handleChange}
            value={form.stripeSecretKey ? form.stripeSecretKey : ""}
            name="stripeSecretKey"
            id="stripeSecretKey"
            type="text"
            placeholder="Enter your STRIPE Secret Key"
            className="w-full p-2 rounded-lg my-2 border-2 border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserInfoForm;
