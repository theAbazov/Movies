import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { forwardRef } from "react";

export const Thumbnail = forwardRef(({ result }, ref) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={`${IMG_URL}${result.backdrop_path || result.poster_path}`}
        layout="responsive"
        width={1920}
        height={1080}
        alt="Image not found"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}`}
          {result.release_date || result.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});
