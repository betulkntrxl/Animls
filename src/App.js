import { useState } from "react";
import Animal from "./Animal";
import "./App.css";

function rand() {
  const array = ["dog", "cat", "cow", "bird", "horse", "gator"];
  return array[Math.floor(Math.random() * array.length)];
}

function App() {
  const [animals, setanimals] = useState([]);
  const handlclick = () => {
    setanimals([...animals, rand()]);
  };

  const renderanimals = animals.map((animal, i) => {
    return <Animal type={animal} key={i} />;
  });

  return (
    <div className="app">
       <h1 className="h1"> Click the animal to make the heart bigger!</h1>
      <button onClick={handlclick}>Add animal </button>
      <div className="animal-list"> {renderanimals}</div>
    </div>
  );
}

export default App;
