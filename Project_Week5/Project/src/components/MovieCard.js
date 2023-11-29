import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import Trailer from "./Trailer";

const MovieCard = ({ movieId, posterPath }) => {
  if (!posterPath) {
    return null;
  }
  const navigate = useNavigate();
  const handleClick = (movieId) => {
    navigate("/trailer/" + movieId);
  };

  return (
    <div className="w-48 pr-4 pl-4 cursor-pointer hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-yellow-300">
      <img
        alt="movie card"
        src={IMG_CDN_URL + posterPath}
        onClick={(e) => handleClick(movieId)}
      />
    </div>
  );
};

export default MovieCard;
