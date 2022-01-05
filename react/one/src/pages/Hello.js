function Hello(Props) {
  return (
    <>
      <h2 style={{ color: Props.color }}>Hello.{Props.name}</h2>
    </>
  );
}

export default Hello;
