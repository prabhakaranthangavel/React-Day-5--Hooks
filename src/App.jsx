//! useState Hook Example : 1

//! serTimer method:

// import React, { useState } from "react";

// function App() {

//   const [counter, setCounter] = useState(0);
// // counter    => state name

// // setCounter => [state setter name]
// //               ["set" keyword must]
// //               [state ஐ change செய்ய பயன்படுகிறது]

// // useState   => Hook name

// // 0          => [initial value must be given]
// //               [the value "0" is assigned to counter or statename]

//   setTimeout(() => {
//     setCounter(counter + 1);
//     console.log("rendering ...", counter);
//   }, 2000);
//   return <div>App</div>;
// }

// export default App;

//! useState Example : 2

//! onClick button method:

// import React, { useState } from "react";

// function App() {

//   const [counter, setCounter] = useState(0);
// // counter    => state name

// // setCounter => [state setter name]
// //               ["set" keyword must]
// //               [state ஐ change செய்ய பயன்படுகிறது]

// // useState   => Hook name

// // 0          => [initial value must be given]
// //               [the value "0" is assigned to counter or statename]

// function incrementClick () {
//   setCounter(counter + 1);
// }

// function decrementClick () {
//   setCounter(counter - 1);
// }

// function resetClick () {
//   setCounter(0);
// }

//   return (
//     <div>
//       <p> {counter} </p>
//       <button onClick={incrementClick}>Add</button>
//       <button onClick={decrementClick}>Reduce</button>
//       <button onClick={resetClick}>Reset All</button>
//     </div>
//   )
// }

// export default App;

//! Converting it to a new or separate component
//! இதனை புதிதாக அல்லது separate Component ஆக மாற்றுதல்

// ! Step 1:
{
  /* <Display />  */
}

// ! Step2:
// function Display() {
//   return (
//     <p>{counter}</p>
//   )
// }

//! How to set state as props and pass it to a component?
//! இதனை ஒரு component க்கு state ஐ props ஆக set செய்து pass செய்வது எப்படி?

// src => create a folder (component) =>create a file(Display.jsx) => paste the display function => import Display


// import React, { useState } from "react";
// import Display from "./components/Display";


// function App() {
//   const [counter, setCounter] = useState(0);

//   function incrementClick() {
//     setCounter(counter + 1);
//   }

//   function decrementClick() {
//     setCounter(counter - 1);
//   }

//   function resetClick() {
//     setCounter(0);
//   }

//   return (
//     <div>
//       <Display counter = {counter}/>
//       <button onClick={incrementClick}>Add</button>
//       <button onClick={decrementClick}>Reduce</button>
//       <button onClick={resetClick}>Reset All</button>
//     </div>
//   );
// }

// export default App;



//! இதேபோல் Button என்ற component ஐ create செய்து props ஐ பயன்படுத்துதல்

// import React, { useState } from "react";
// import Display from "./components/Display";
// import Button from "./components/Button";

// function App() {
//   const [counter, setCounter] = useState(0);

//   function incrementClick() {
//     setCounter(counter + 1);
//   }

//   function decrementClick() {
//     setCounter(counter - 1);
//   }

//   function resetClick() {
//     setCounter(0);
//   }

//   return (
//     <div>

//       <Display counter = {counter}/>

//       <Button handleClick={incrementClick} name="Add"/>
//       <Button handleClick={decrementClick} name="Reduce"/>
//       <Button handleClick={resetClick} name="Reset All"/>

//     </div>
//   );
// }

// export default App;

// *************************************************************************************************************************

//! useEffect Hook Example : 1

//! Document Title Name Change

// import React, { useEffect, useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect( () => {
//     document.title = ` Count : ${count}`;
//   }, []);
  
//   const handleChange = () => {
//     setCount (count + 1);
//   }

//   console.log(count);

//   return (
//     <div>
//       <h2>Document Title Name Change</h2>
//       <button onClick={handleChange} > Change Count</button>
//     </div>
//   )
// }

// export default App



//! useEffect Hook Example : 2

//! API Fetch couries name printed

// import React,{useEffect,useState} from 'react'

// function App() {

// // Create a state to store the data fetched from the API
// const [posts, setPosts] = useState(null);

// const fetchPosts = async () => {
//   const response = await fetch ("https://restcountries.com/v2/all");
//   const data = await response.json();
//   setPosts(data);
// }

// // data has to be fetched
// // the following will run only once
// useEffect (() => {
//   fetchPosts();
// }, []);


//   return (
//     <div>
//       <h2>API DATA - REST COUNTRIES NAME</h2>
//       {
//         posts ? (
//           <ul>
//             {
//               posts.map(post =>
//                 <li key={post.id}>{post.name}</li>
//                 )
//             }
//           </ul>
//         ) : (
//           <p>Fetching Data Loading.....</p>
//         )
//       }
//     </div>
//   )
// }

// export default App


// *************************************************************************************************************************

//! 3.Props drilling Example : 

// import React from 'react'

// function GrandChildComponent( {data} ) {
//   console.log(`from grand child component : ${data}`);
//   return (
//     <div>
//       <h3>GrandChild Component</h3>
//     </div>
//   )
// }

// function ChildComponent( {data} ) {
//   console.log(data);
//   return (
//     <div>
//       <h2>Child Component</h2>
//       <GrandChildComponent data ={data} />
//     </div>
//   )
// }

// function App() {
//   const parentData = `Helo From Parent`; 
//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <ChildComponent data ={parentData} />
//     </div>
//   )
// }

// export default App;

// *************************************************************************************************************************

//! 4.Passing data from child to parent component

//! Example : 1

// import React from 'react'
// import { Component } from 'react';
// import { useState } from 'react'

// // child Component
// // receive the name as data props
// function Hello ( {data} ) {
//   return (
//     <p> Hello {data}</p>
//   )
// }

// // parent Component
// // data = "Prabhakaran"
// function App() {
//   const [data,setData] = useState("Prabahkaran");

//   return (
//     <div>
//       <Hello data = {data} />
//     </div>
//   )
// }

// export default App




//! Example : 2

import React, { useState } from 'react';

// child component
function ChildComponent({ sendDataToParent }) {
  // data to be passed to the parent component
  let message = `Hello Parent!`;

  const sendData = () => {
    sendDataToParent(message);
  }

  return (
    <div>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  )
}

// parent component
function App() {

  // define a state to store the child data in the parent component
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (message) => {
    setDataFromChild(message);
  }

  return (
    <div>
      <div>Data From Child: {dataFromChild}</div>
      <ChildComponent sendDataToParent={ handleDataFromChild } />
    </div>
  )
}

export default App;

// *************************************************************************************************************************