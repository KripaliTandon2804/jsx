//import the react and react-dom libraries

import React from  'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//   return 'Click on me!';
// }

//create a react component
const App = () => {
    const buttonClick = 'Click Me!'
    const labelText = 'Enter name:'
    return (
    <div>
    <label className="label" htmlFor="name">{labelText}</label>
    <input id="name" type="text" />
    <button style= {{backgroundColor:"blue", color:"white"}}>
      {buttonClick}
      </button>
  </div>
    );
}

//take the react component and show it on screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)