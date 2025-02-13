import React, { useState } from "react";
import football from "../assets/images/Football.jpeg";

const Assignmentmoduleeight = () => {
  const handleClick = () => {
    // alert("This is Mahmoud turn!!!!");
    setName("Ilorin Hub");
  };

  function handleChange(e) {
    // alert(e.target.value);
    alert("You just made a change on the input text with the alphabet");
  }

  const handleMouseLeave = () => {
    alert("Opps!!!! he left ");
  };

  const [name, setName] = useState("One Innovation Hub long");

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setDecrease(decrease - 1);
  };
  const [decrease, setDecrease] = useState(100);

  return (
    <div>
      AssignmentModuleEight
      <h2 onMouseLeave={handleMouseLeave}>First Text</h2>
      <h3>{name}</h3>
      <h4>{count}</h4>
      <h1>{decrease}</h1>
      <label htmlFor="name">Name :</label>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleIncrease}>Click to increase</button>
      <button onClick={handleDecrease}> Click to decrease</button>
      <img src={football} alt="" />
    </div>
  );
};

export default Assignmentmoduleeight;
