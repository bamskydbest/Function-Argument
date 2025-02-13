import PropTypes from "prop-types";
import { useState } from "react";
// import React from "react";

const Welcome = ({ age, greetFunction, name, resered = "true", list }) => {
  const output = list.find((name) => {
    return name === "Majeedat";
  });

  const newArray = [2, 4, 6, 8, 10, 12];
  const answer = newArray.filter((number) => {
    return number < 10;
  });

  const reveal = newArray.map((lot) => {
    return lot * 2;
  });

  const handleAlert = () => {
    // alert("The guy clicked me");
    setButtonText("Woow! you did it");
  };
  function handleChange() {
    alert("I am changed");
  }
  const buttonValue = "He has changed me";
  const [buttonText, setButtonText] = useState("Click me");
  return (
    <div>
      Welcome to a new class , {name} - with age {age}
      <p>It is {resered} that you have a reservation with us.</p>
      <button onClick={greetFunction}>Click Me</button>
      <p>{list}</p>
      <p>The found result is {output}</p>
      <p>numbers less than 10 from the given arrays are :{answer}</p>
      <p>
        The map result is going to return the same length of the array as shown
        below : {reveal}
      </p>
      <button onClick={handleAlert}>{buttonText}</button>
      <p>
        Name : <input type="text" onChange={handleChange} />
      </p>
    </div>
  );
};

export default Welcome;

Welcome.propTypes = {
  age: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  resered: PropTypes.string,
  greetFunction: PropTypes.function,
  list: PropTypes.array,
};
