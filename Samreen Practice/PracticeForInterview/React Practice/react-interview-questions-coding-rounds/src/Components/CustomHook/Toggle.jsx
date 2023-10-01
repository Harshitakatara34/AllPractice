import useCustomhook from "./UseCustom";

function Toggle() {
  const [tog, funTog] = useCustomhook();

  return (
    <div>
      <br />
      <br />
      <hr />
      <h1>Custom Hook</h1>
      <h2>Toggle:{tog ? "true" : "false"}</h2>
      <button onClick={funTog}>customToggle</button>
    </div>
  );
}
export default Toggle;
