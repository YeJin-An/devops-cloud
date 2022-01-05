function Hello({ color, name, isSpecial }) {
  return (
    <>
      <h2 style={{ color }}>
        {isSpecial ? <b>*</b> : null}뇽안.{name}
      </h2>
    </>
  );
}

Hello.defaultProps = {
  name: "디폴트",
};

export default Hello;
