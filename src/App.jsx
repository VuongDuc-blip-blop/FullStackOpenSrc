import { useState } from "react";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, your are {props.age} years old
      </p>
    </div>
  );
};

function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a}+{b} is {a + b}
      </p>
      <Hello name="bro" age="18" />
      <Hello name="peter" age="19" />
    </>
  );
}

export default App;
