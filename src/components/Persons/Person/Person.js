import React from 'react';
// import './Person.css';
import styled from 'styled-components';
// import Radium from 'radium';

const StyledDiv = styled.div`
    width: 60%;  
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width : 500px){
        width: 450px;
    }
`;

const Person = (props) => {
    // const style = {
    //     '@media (min-width : 500px)' : {
    //         width : '450px'
    //     }
    // }
    // const rnd = Math.random();
    // console.log(rnd);
    // if (rnd > 0.7) {
    //     throw new Error("Something Went Wrong");
    // }
    return (

        <StyledDiv className="Person"
        // style={style}
        >
            <p onClick={props.click}>I am  {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <p> My random age is {Math.floor(Math.random() * 30)} years</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

// export default Radium(Person);
export default Person;