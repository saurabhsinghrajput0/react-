import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState("Even");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (count % 2 === 0) {
      setType("Even");
    } else {
      setType("Odd");
    }
  }, [count]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <h1 className="text-3xl font-bold">Count: {count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Inc
      </button>

      <p>Type is: {type}</p>

      <button onClick={getData}>Show Users</button>

      <div>
        {data.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;