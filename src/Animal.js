import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import "./animal.css";

// for svg files we must do this
const svg = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
function Animal({ type }) {
  const [clicks, setclicks] = useState(0);
  const handleclick = () => {
    setclicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleclick}>
      <img className="animal" alt="animal" src={svg[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 11 * clicks + "px" }}
      />
    </div>
  );
}

export default Animal;
