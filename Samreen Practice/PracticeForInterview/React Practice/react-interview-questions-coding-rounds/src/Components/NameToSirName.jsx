const { useState } = require("react");

export function NameToSirName() {
  const [name, setname] = useState("Samreen");

  const handleClick = () => {
    setname(name === "Samreen" ? "Inayat" : "Samreen");
  };

  return (
    <div>
      <br />
      <hr />
      <br />
      <h1>Name To SirName</h1>
      <h2 onClick={handleClick}>{name}</h2>
    </div>
  );
}
