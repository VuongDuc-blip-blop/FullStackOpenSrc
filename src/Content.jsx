const Content = (prop) => {
  return (
    <>
      {prop.Content.map((item, index) => (
        <p key={index}>
          {item.part} {item.exercise}
        </p>
      ))}
    </>
  );
};

export default Content;
