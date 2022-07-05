import { useState } from "react";
import Person from './Person'
const State = () => {
  const [persons, setPersons] = useState([
    {name : "leon", age: "31"},
    {name : "dan", age: "35"},
    {name : "christian", age: "25"}
  ]);

  const handleClick = (index) => {
    // using spread syntax, spread the array into separate arguments
    // https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab
    let newArray  = [...persons]
    // can change the value of our new array, in this case we are 
    // removing the item from the 'index' position and deleting the 1 item
    newArray.splice(index, 1)
    // updating 'persons' with the updated array
    setPersons(newArray)
  }

  return (
    <div>
      <h1>state functional component</h1>
      {/* using the map method to iterate through my array */}
        {persons.map((person, index) => {
            // passing through props for each iteraterable item (person)
            return <Person handleClick={() => handleClick(index)} name={person.name} age={person.age} key={index}/>
        })}
    </div>
  );
};

export default State;
