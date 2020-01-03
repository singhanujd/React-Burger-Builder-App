import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const AppDumb = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Max", age: 28 },
            { name: "Anuj", age: 29 },
            { name: "Ravi", age: 30 }
        ],
        otherState: 'some other value'
    })
    console.log(personsState);
    const switchNameHandler = () => {
        console.log("Was clicked");
        setPersonsState({
            persons: [
                { name: "Anuj Singh", age: 28 },
                { name: "Anuj", age: 29 },
                { name: "Ravi", age: 27 }
            ],
            otherState: personsState.otherState
        })
    }
    return (
        <div className="App">
            <h1>Hi I am React App</h1>
            <p>This is really working</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age} />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age} >My Hobbies : Racing</Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age} />
        </div>
    )
}

export default AppDumb;

