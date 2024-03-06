import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [data, setData] = useState("");
  const [filtered, setFiltered] = useState(fruits);

  const handleEvent = (e) => {
    e.preventDefault();
    setData(e.target.value);
    const filteredData = fruits.filter((item) =>
      item.toLowerCase().includes(data.toLowerCase())
    );
    setFiltered([...filteredData]);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <input placeholder="Enter data" onChange={handleEvent} />
      {filtered.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;
