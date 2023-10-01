function Unorder({ elements }) {
  return (
    <div>
      <h1>Unorder List</h1>
      <ul>
        {elements.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <hr />
    </div>
  );
}

export default Unorder;
