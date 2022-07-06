import { useState } from "react";

const Ternary = () => {
  const [hide, setHide] = useState(false);

  return (
    <div>
      <h1>ternary</h1>
      {!hide ? (
        <button onClick={() => setHide(true)}>click to view list</button>
      ) : (
        <List func={setHide} />
      )}
    </div>
  );
};

const List = ({ func }) => {
  return (
    <div>
      <h2>favourite books</h2>
      <ul>
        <li>the hobbit</li>
        <li>lord of the rings</li>
        <li>ready player one</li>
      </ul>
      <button onClick={() => func(false)}>hide</button>
    </div>
  );
};
export default Ternary;
