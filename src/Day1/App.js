import '../App.css'

let App = () => {
  return (
    <div>
      <h1 className="heading">hello there</h1>
      <Person 
        name="leon" 
        age="31"
        petType="dog"
        petName="pedro"
      />
      <Person
        name="christian"
        age="25"
        petType="cat"
        petName="tom"
      />
    </div>
  )
};

let Person = (props) => {
  return (
    <div>
      <h2 className="heading">my name is {props.name} i am {props.age} years old</h2>
      <PetComponent petType={props.petType} petName={props.petName}/>
    </div>
  )
}

let PetComponent = (props) => {
  return <p>i have a {props.petType} it's called {props.petName}</p>
}
export default App