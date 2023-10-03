import React, { useEffect, useState } from "react";

export function FetchApi() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const funFetch = () => {
      fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then((res) => res.json())
        .then((res) => {
          setdata(res);
          console.log(res);
        })
        .catch((err) => console.log(err));
    };

    funFetch();
  }, []);

  return (
    <div>
      <br />
      <hr />
      <h1>Fetch Api</h1>
      <br />
      {data.map((item) => {
        return <li>{item.title}</li>;
      })}
    </div>
  );
}
