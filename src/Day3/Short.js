import { useState } from "react";
const Short = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn && <Status />}
      <h1>welcome to our site</h1>
      <button onClick={() => setLoggedIn(true)}>login</button>
    </div>
  );
};

const Status = () => {
  return <div>user logged in</div>;
};
export default Short;
