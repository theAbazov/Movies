import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";

export const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <ul
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap 
   space-x-10 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </ul>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};
