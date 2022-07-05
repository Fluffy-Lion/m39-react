import { useState } from "react";
import Person from './Person'
const State = () => {
  const [persons, setPersons] = useState([
    {name : "leon", age: "31"},
    {name : "dan", age: "35"},
    {name : "christian", age: "25"}
  ]);

  const handleClick = (index) => {
    let newArray  = [...persons]
    newArray.splice(index, 1)
    setPersons(newArray)
  }

  return (
    <div>
      <h1>state functional component</h1>
        {persons.map((person, index) => {
            return <Person handleClick={handleClick} name={person.name} age={person.age} key={index}/>
        })}
    </div>
  );
};

export default State;
