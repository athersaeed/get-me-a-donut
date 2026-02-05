import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/tea.gif"
              alt="Donut Icon"
              width={100}
              height={100}
              className="invertImg"
            />
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-linear  -to-r from-purple-400 to-pink-600">
            About Get Me A Donut
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Fueling Creativity, One Donut at a Time
          </p>
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Welcome to <strong>Get Me A Donut</strong>, the premier crowdfunding
            platform designed specifically for creators, developers, artists,
            and dreamers. We believe that great work deserves to be supported,
            and sometimes, all it takes is a simple gesture—like buying someone
            a donut—to keep the creative fires burning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Our Mission
              </h3>
              <p>
                To provide a seamless, friendly, and direct way for fans to show
                appreciation to the creators they love. We strip away the
                complexity of traditional crowdfunding and make support as easy
                as sharing a treat.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-white">
                How It Works
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Create your page in seconds.</li>
                <li>Share your unique link with your audience.</li>
                <li>Receive direct support (donuts!) from your fans.</li>
                <li>Withdraw your funds hassle-free.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
            <h3 className="text-3xl font-bold mb-6 text-center text-white">
              Why Choose Us?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🚀</div>
                <h4 className="font-bold text-lg text-white">Fast Setup</h4>
                <p className="text-sm mt-2">
                  Go from zero to funded in under 5 minutes.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">💸</div>
                <h4 className="font-bold text-lg text-white">Low Fees</h4>
                <p className="text-sm mt-2">
                  We take a tiny cut so you keep more of what you earn.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">🔒</div>
                <h4 className="font-bold text-lg text-white">Secure</h4>
                <p className="text-sm mt-2">
                  Payments processed securely via Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/login">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl hover:bg-gray-900 transition-colors">
                Join the Community
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - Get Me A Donut",
  description: "About Get Me A Donut",
};
