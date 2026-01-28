import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import Payment from "@/models/Payment";
import User from "@/models/User";
import connectDB from "@/db/connectDB";

export async function POST(request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    // Parse form data from the request
    const body = await request.formData();
    const name = body.get("name");
    const message = body.get("message");
    const amount = body.get("amount");
    const username = body.get("username");

    // Basic validation
    if (!amount || !name || !username) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await connectDB();
    const recipientUser = await User.findOne({ username: username });

    if (!recipientUser || !recipientUser.stripeSecretKey) {
      return NextResponse.json(
        { error: "Recipient has not set up payments" },
        { status: 400 },
      );
    }

    const stripe = new Stripe(recipientUser.stripeSecretKey);

    // Convert amount to cents (Stripe expects integer cents)
    const amountInCents = Math.round(parseFloat(amount) * 100);

    // Ensure minimum amount (50 cents)
    if (amountInCents < 50) {
      return NextResponse.json(
        { error: "Amount must be at least $0.50" },
        { status: 400 },
      );
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: `Donation to ${username}`,
              description: `Message: ${message || "No message"}`,
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/${username}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${username}?canceled=true`,
      metadata: {
        payment_name: name,
        payment_message: message,
        recipient_username: username,
      },
    });

    // Save payment to database
    await Payment.create({
      name: name,
      to_user: username,
      amount: amount, // Storing in dollars/original unit as per schema type Number
      message: message,
      payment_id: session.id,
      done: false,
    });

    if (session.payment_status === "paid") {
      await Payment.updateOne({
        payment_id: session.id,
        done: true,
      });
    }

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error("Stripe Error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
