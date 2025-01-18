import React from 'react'

import { Login, Signup, Feedback, Buttons } from './pages'

function App() {
  return (
    <div>
      <Buttons/>
      <Signup />
      <Login />
      <Feedback/>
    </div>
  )
}

export default App



// example for useRef, forwardRef

// import React, { useState, useEffect, useRef, forwardRef } from "react";

// // Example 1: Focusing an input (without useRef) - Fails
// function FocusInputWithoutRef() {
//   const [showInput, setShowInput] = useState(false);

//   useEffect(() => {
//     if (showInput) {
//       // Problem: No direct way to access the input element
//       // document.getElementById('my-input').focus(); // Avoid this! Not React way
//       // This will not work reliably, especially if the component re-renders.
//       try {
//         document.getElementById("my-input").focus();
//       } catch (error) {
//         console.log("error", error);
//       }
//     }
//   }, [showInput]);

//   return (
//     <div>
//       <button onClick={() => setShowInput(true)}>Show Input</button>
//       {showInput && <input type="text" id="my-input" />}
//     </div>
//   );
// }

// // Example 2: Measuring a DOM element (without useRef) - Difficult and unreliable
// function MeasureElementWithoutRef() {
//   const [height, setHeight] = useState(0);
//   const [showDiv, setShowDiv] = useState(false);

//   useEffect(() => {
//     if (showDiv) {
//       const element = document.getElementById("my-div");
//       if (element) {
//         setHeight(element.clientHeight);
//       }
//     }
//   }, [showDiv]);

//   return (
//     <div>
//       <button onClick={() => setShowDiv(true)}>Show Div</button>
//       {showDiv && (
//         <div
//           id="my-div"
//           style={{ width: "200px", backgroundColor: "lightblue" }}
//         >
//           This is a div
//         </div>
//       )}
//       {height > 0 && <p>Div Height: {height}px</p>}
//     </div>
//   );
// }

// // Example 3: Forwarding a ref to a child component (without forwardRef) - Impossible
// const MyInput = (props) => <input type="text" {...props} />;

// function ParentComponentWithoutForwardRef() {
//   const inputRef = useRef(null);

//   return (
//     <div>
//       {/* Problem: The ref will be attached to the MyInput component instance, not the input element */}
//       <MyInput ref={inputRef} placeholder="Try to focus me" />
//       <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
//     </div>
//   );
// }

// function ParentComponentWithForwardRef() {
//   const inputRef = useRef(null);

//   const MyInputWithForwardRef = forwardRef((props, ref) => (
//     <input type="text" ref={ref} {...props} />
//   ));

//   return (
//     <div>
//       <MyInputWithForwardRef ref={inputRef} placeholder="Focus me" />
//       <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h2>Focus Input Without Ref</h2>
//       <FocusInputWithoutRef />

//       <h2>Measure Element Without Ref</h2>
//       <MeasureElementWithoutRef />

//       <h2>Parent Component Without Forward Ref</h2>
//       <ParentComponentWithoutForwardRef />

//       <h2>Parent Component With Forward Ref</h2>
//       <ParentComponentWithForwardRef />
//     </div>
//   );
// }
