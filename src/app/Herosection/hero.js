import React from "react";

export function HeroSection() {
  return (
    <div className="flex justify-center items-center flex-col space-y-2 mt-24">
      <h1 className="text-white text-7xl font-bold ">Unlimited movies, TV </h1>
      <h1 className="text-white text-7xl font-bold ">shows, and more</h1>
      <p className="text-white text-xl font-bold ">
        Starts at Rs 250. Cancel anytime.
      </p>
      <br />
      <p className="text-white text-xl font-bold ">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex gap-5" >
        <input
          type="email"
          placeholder="Email address"
          required
          className="p-5  bg-black bg-opacity-60 text-white placeholder-gray-400 placeholder:font-bold  rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 "
        />
        <button className=" p-4  bg-red-700 text-white text-3xl rounded-md">Get Started  </button>
      </div>
    </div>
  );
}
