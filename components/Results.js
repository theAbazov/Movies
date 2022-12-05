import React from "react";
import { Thumbnail } from "./Thumbnail";
import FlipMove from "react-flip-move";

export const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 space-x-3 space-y-3 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};
