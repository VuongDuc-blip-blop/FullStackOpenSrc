import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = "Half Stack Application Development";
  const part1 = "Fundamental of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;

  const content = [
    {
      part: "Fundamental of React",
      exercise: 10,
    },
    {
      part: "Using props to pass data",
      exercise: 7,
    },
    {
      part: "State of a component",
      exercise: 14,
    },
  ];

  const exercises = [exercise1, exercise2, exercise3];

  return (
    <>
      <Header courseName={course} />
      <Content Content={content} />
      <Total exercises={exercises} />
    </>
  );
};

export default App;
