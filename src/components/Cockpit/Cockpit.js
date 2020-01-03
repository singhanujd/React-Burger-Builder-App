import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
//     const StyledButton = styled.button`
//   cursor : pointer;
//   background-color : ${props => props.alt ? 'red' : 'green'};
//   color : white;
//   font : inherit;
//   border : 1px solid blue;
//   padding : 8px;
//   &:hover {
//       background-color:  ${props => props.alt ? 'salmon' : 'lightgreen'};;
//       color: black;
//   }
// `;
    let assignedClasses = [];
    let btnClass = '';    
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2)
        assignedClasses.push('red');
    if (props.persons.length <= 1)
        assignedClasses.push('bold');
    return (
        <div className={classes.Cockpit}>
            <h1>Hi I am React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            {/* This can be inefficient as React can re render multiple times (arrow function) */}
            <button
            className={btnClass}
                // alt={props.showPersons.toString()}
                // style={style}
                //  onClick={(event) => this.switchNameHandler("Anuj Singh")}
                onClick={props.clicked}
            >Toggle Person
        </button>
        </div>
    );
}

export default Cockpit;