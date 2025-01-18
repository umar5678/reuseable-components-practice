import React from "react";
import Button from "../components/Button";

const Buttons = () => {
  return (
    <div className="bg-slate-300 h-screen">
      <div className="w-full flex flex-col  flex-wrap gap-2  pt-20">
        <div className="w-full flex items-center flex-wrap gap-2 justify-center">
          <Button size="lg">default</Button>
          <Button className="">default</Button>

          <Button size="sm" className="">
            default
          </Button>
          <Button size="icon" className=""></Button>
        </div>

        <div className="w-full flex items-center flex-wrap gap-2 justify-center">
          <Button variant="destructive" size="lg">
            Destructive
          </Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="destructive" size="sm">
            Destructive
          </Button>
          <Button variant="destructive" size="icon"></Button>
        </div>

        <div className="w-full flex items-center flex-wrap gap-2 justify-center">
          <Button variant="outline" size="lg" className="">
            Outline
          </Button>
          <Button variant="outline" className="">
            Outline
          </Button>
          <Button variant="outline" size="sm" className="">
            Outline
          </Button>
          <Button variant="outline" size="icon" className=""></Button>
        </div>

        <div className="w-full flex items-center flex-wrap gap-2 justify-center">
          <Button variant="secondary" size="lg" className="">
            Secondary
          </Button>

          <Button variant="secondary" className="">
            Secondary
          </Button>
          <Button variant="secondary" size="sm" className="">
            Secondary
          </Button>
          <Button variant="secondary" size="icon" className=""></Button>
        </div>

        <div className="w-full flex items-center flex-wrap gap-2 justify-center">
          <Button variant="ghost" size="lg" className="">
            ghost
          </Button>
          <Button variant="ghost" className="">
            ghost
          </Button>
          <Button variant="ghost" size="sm" className="">
            ghost
          </Button>
          <Button variant="ghost" size="icon" className=""></Button>
        </div>

        <div className="w-full flex items-center flex-wrap gap-2 justify-center">
          <Button variant="link" size="lg" className="">
            Link
          </Button>

          <Button variant="link" className="">
            Link
          </Button>
          <Button variant="link" size="sm" className="">
            Link
          </Button>
          <Button variant="link" size="icon" className=""></Button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;

// import React, { useRef } from "react";
// import Button from "../components/Button";

// const Buttons = () => {
//   const buttonRef1 = useRef(null);
//   const buttonRef2 = useRef(null);
//   const buttonRef3 = useRef(null);
//   const buttonRef4 = useRef(null);

//   const handleClick = (buttonNumber) => {
//     switch (buttonNumber) {
//       case 1:
//         if (buttonRef1.current) {
//           console.log("Red button Clicked");
//           buttonRef1.current.style.transform = 'scale(1.1)'; // Example visual effect
//           setTimeout(() => buttonRef1.current.style.transform = 'scale(1)', 300);
//         }
//         break;
//       case 2:
//         if (buttonRef2.current) {
//           console.log("Blue button Clicked");
//           buttonRef2.current.style.backgroundColor = 'darkblue'; // Example visual effect
//           setTimeout(() => buttonRef2.current.style.backgroundColor = 'blue', 300);
//         }
//         break;
//       case 3:
//         if (buttonRef3.current) {
//           console.log("Yellow button Clicked");
//           buttonRef3.current.style.color = 'red'; // Example visual effect
//           setTimeout(() => buttonRef3.current.style.color = 'black', 300);
//         }
//         break;
//       case 4:
//         if (buttonRef4.current) {
//           console.log("Green button Clicked");
//           buttonRef4.current.style.borderRadius = '50%'; // Example visual effect
//           setTimeout(() => buttonRef4.current.style.borderRadius = '0%', 300);
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="bg-slate-300 h-screen">
//       <div className="w-full flex items-center flex-wrap gap-2 justify-center">
//         <Button
//           className="text-2xl bg-red-500 focus:border-black"
//           ref={buttonRef1}
//           onClick={() => handleClick(1)}
//         >
//           Red Button
//         </Button>

//         <Button
//           className="text-2xl bg-blue-500"
//           ref={buttonRef2}
//           onClick={() => handleClick(2)}
//         >
//           Blue Button
//         </Button>

//         <Button
//           className="text-2xl bg-yellow-500"
//           ref={buttonRef3}
//           onClick={() => handleClick(3)}
//         >
//           Yellow Button
//         </Button>

//         <Button
//           className="text-2xl bg-green-500"
//           ref={buttonRef4}
//           onClick={() => handleClick(4)}
//         >
//           Green Button
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Buttons;
