// import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";


const Rate = () => {
  const totalStars = 5;
  const activeStars = 4;

  return (
    <div>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? <FaStar /> : <FaRegStar />;
      })}
    </div>
  );
};

export default Rate
