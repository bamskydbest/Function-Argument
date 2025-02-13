import React from "react";

const Assignment = () => {
  //   Assignment:
  // 1. Write a function that takes an argument and find a particular element from an array based on the argument passed.

  // retry

  const find = (arr) => {
    const found = arr.find((element) => {
      return element === "Majeedat";
    });
    return found;
  };
  const firstNames = ["Abdulmajeed", "Sanusi", "Majeedat", "Kolawole"];
  const we = find(firstNames);

  // 2. Given an array of objects representing students, write a function that filters out students who scored below 50 in a test and returns a new array of students who passed. Use the .filter() method.
  // const students = [ { name: "Alice", score: 85 }, { name: "Bob", score: 40 }, { name: "Charlie", score: 72 }, { name: "David", score: 30 } ];
  // Expected Output:
  // [
  // { name: "Alice", score: 85 },
  // { name: "Charlie", score: 72 }
  // ]

  //Solution

  const getPassingStudents = (learners) => {
    const goodStudents = learners.filter((element) => {
      return element.score >= 50;
    });
    return goodStudents;
  };
  const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 40 },
    { name: "Charlie", score: 72 },
    { name: "David", score: 30 },
  ];
  const result = getPassingStudents(students);

  // 3. Task:
  // Create a React component called UserProfile that accepts name, age, and email as props and displays them in the UI. Then, render this component inside App dot jsx file and pass different values as props.

  // 4. Create another component called BestRestaurants that accepts food, size, and location as props and implement the use of destructuring to use the prop in the BestRestaurant component.
  return (
    <div>
      Assignment
      <p>
        The answer for Question 2 is [ {result[0].name} , {result[0].score} ]{" "}
        The answer for Question 2 is [ {result[1].name} , {result[1].score} ]
      </p>
      <p>answer for Question 1 is {we}</p>
    </div>
  );
};

export default Assignment;
