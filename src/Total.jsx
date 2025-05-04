const Total = (prop) => {
  var exerciseSum = prop.exercises.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return (
    <>
      <p>Number of exercises {exerciseSum}</p>
    </>
  );
};

export default Total;
