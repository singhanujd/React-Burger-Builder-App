import React from 'react';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

const App = () => (
  <Layout>
    <BurgerBuilder />
  </Layout>
);

export default App;


// import React, { Fragment, Component } from 'react';
// import classes from './App.module.css';
// import Persons from '../components/Persons/Persons';
// import Cockpit from '../components/Cockpit/Cockpit';
// // import styled from 'styled-components';
// // import Radium, { StyleRoot } from 'radium';
// // import ErrorBoundary from '../components/Error Boundary/ErrorBoundary';

// class App extends Component {
//   state = {
//     persons: [
//       { id: "asds", name: "Max", age: 28 },
//       { id: "reewr", name: "Anuj", age: 29 },
//       { id: "jhgjg", name: "Ravi", age: 30 }
//     ],
//     otherState: 'some other value',
//     showPersons: true
//   }

//   switchNameHandler = (newName) => {
//     console.log("Was clicked");
//     // DON'T DO THIS, REACT WILL NOT RECOGNISE this.state.persons[0].name = 'ANUJ SINGH';
//     this.setState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: "Anuj", age: 29 },
//         { name: "Ravi", age: 27 }
//       ],
//     })
//   }

//   nameChangedHandler = (event, id) => {
//     // debugger;
//     console.log("Changed");
//     const personIndex = this.state.persons.findIndex(
//       person => person.id === id
//     );
//     // const person = Object.assign({},this.state.persons[personIndex]);
//     const person = { ...this.state.persons[personIndex] };
//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({ persons: persons })
//   }

//   togglePersonsHandler = () => {
//     this.setState({
//       showPersons: !this.state.showPersons
//     })
//   }

//   deletePersonsHandler = (personIndex) => {
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({
//       persons: persons
//     })
//   }

//   render() {
//     // const style = {
//     //   backgroundColor: 'green',
//     //   font: 'inherit',
//     //   border: '1px solid blue',
//     //   padding: '8px',
//     //   cursor: 'pointer',
//     //   ':hover': {
//     //     backgroundColor: 'lightgreen',
//     //     color: 'black'
//     //   }
//     // }

//     let persons = null;
//     if (this.state.showPersons) {
//       persons = <Persons
//         persons={this.state.persons}
//         clicked={this.deletePersonsHandler}
//         changed={this.nameChangedHandler} />
//       // style.backgroundColor = 'red';
//       // style[':hover'] = {
//       //   backgroundColor: 'salmon',
//       //   color: 'black'
//       // }
//     }

//     return (
//       // <StyleRoot>
//       <div className={classes.App}>
//         <Cockpit
//           showPersons={this.state.showPersons}
//           persons={this.state.persons}
//           clicked={this.togglePersonsHandler}
//         />
//         {persons}
//       </div>
//     )

//     {/* <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age} />
//         <Person
//           name={this.state.persons[1].name}
//           click={this.switchNameHandler.bind(this,"Anuj Singh")}
//           age={this.state.persons[1].age}
//           changed={this.nameChangedHandler} >My Hobbies : Racing</Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age} /> */
//       /* <Person name="Max" age="28" />
//     <Person name = "Anuj" age = "29" >My Hobbies : Racing</Person>
//     <Person name = "Ravi" age = "30" /> */
//       /* </StyleRoot> */
//     }
//     // return (
//     //   <div className="App">
//     //     <h1>Hi I am React App</h1>
//     //   </div>
//     // )
//     // return React.createElement('div',{
//     //   className : 'App'
//     // },
//     // React.createElement('h1',null,'Hi I am React App!!!')
//     // )
//   }
// }

// // export default Radium(App);
// export default App;
