import useDebounce from "./UseDebounce";

function Debounce() {
  const handleClickDebounce = () => {
    console.log("Button Clicked Debounce");
  };

  const debounce = useDebounce(handleClickDebounce, 2000);
  return (
    <div>
      <br />
      <hr />
      <h1>Debounce</h1>
      <br />
      <button onClick={debounce}>Debounce</button>
    </div>
  );
}

export default Debounce;
