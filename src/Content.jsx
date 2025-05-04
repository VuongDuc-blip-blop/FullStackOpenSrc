import Part from "./Part";
const Content = (prop) => {
  return (
    <>
      <Part Content={prop.Content[0]} />
      <Part Content={prop.Content[1]} />
      <Part Content={prop.Content[2]} />
    </>
  );
};

export default Content;
