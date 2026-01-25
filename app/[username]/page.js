import React from "react";
import PaymentPage from "@/Components/PaymentPage";

const Username = async ({ params, searchParams }) => {
  const { username } = await params;
  const { success, canceled } = await searchParams;

  if (canceled) {
    console.log("Order canceled");
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
