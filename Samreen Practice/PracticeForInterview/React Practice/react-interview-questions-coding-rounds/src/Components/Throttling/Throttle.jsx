import useThrottle from "./UseThrottle";

function Throttle() {
  const handleClickThrottle = () => {
    console.log("Button Clicked Throttle");
  };
  const throttle = useThrottle(handleClickThrottle, 2000);

  return (
    <div>
      <br />
      <hr />
      <h1>Throttle</h1>
      <br />
      <button onClick={throttle}>Throttle</button>
    </div>
  );
}

export default Throttle;
