const Person = (props) => {
    return (
        <div onClick={props.handleClick}>
            <h2>name: {props.name}</h2>
            <h3>age: {props.age}</h3>
        </div>
    )
}
export default Person