import React from "react";
import PaymentPage from "@/Components/PaymentPage";
import { updatePaymentSuccess, fetchuser } from "@/actions/useractions";
import { notFound } from "next/navigation";

const Username = async ({ params, searchParams }) => {
  const { username } = await params;
  const { success, canceled, session_id } = await searchParams;

  if (success && session_id) {
    await updatePaymentSuccess(session_id);
  }

  if (canceled) {
    console.log("Order canceled");
  }

  // Check if user exists in the database
  const u = await fetchuser(username);
  if (!u || u.error) {
    return notFound();
  }

  return (
    <>
      <PaymentPage username={username} />

      {/* Messages for payment status */}
      {success && (
        <div className="text-green-500 text-center my-4 font-bold text-xl">
          Payment Successful! Thanks for your donation.
        </div>
      )}
      {canceled && (
        <div className="text-red-500 text-center my-4 font-bold text-xl">
          Payment Canceled. Feel free to try again.
        </div>
      )}
    </>
  );
};

export default Username;

export const generateMetadata = async ({ params }) => {
  const { username } = await params;
  return {
    title: `Support ${username} - Get Me A Donut`,
    description: `Support ${username} on Get Me A Donut`,
  };
};
