function Hello({ color, name }) {
  return (
    <>
      <h2 style={{ color }}>Hello.{name}</h2>
    </>
  );
}
Hello.defaultProps = {
  name: "디폴트",
};

export default Hello;
