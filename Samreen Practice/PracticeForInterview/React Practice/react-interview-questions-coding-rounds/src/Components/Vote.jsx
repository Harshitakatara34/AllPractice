import { useState } from "react";

export const Vote = () => {
  const [age, setAge] = useState(5);

  const handleChange = () => {
    if (age>=18) {
      setAge(true);
      alert('Vote')
    } else {
      setAge(false);
      alert(`Not vote`)
    }
  };

  return (
    <>
      <br />
      <hr />
      <h1>Voting</h1>
      <br />
      <h1 onClick={handleChange}>Voting:{age}</h1>
    </>
  );
};
