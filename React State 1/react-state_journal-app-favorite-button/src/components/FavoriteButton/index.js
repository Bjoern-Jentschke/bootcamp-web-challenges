import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  // const isFavorite = false;
  const [isFavorite, setIsFavorite] = useState(false);

  function toggledFavorite () {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={() => {
        toggledFavorite();
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
