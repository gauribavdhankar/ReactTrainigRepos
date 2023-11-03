import React, { useEffect,useState } from "react";

function HookUseState() {
  const [count, setCount] = useState(0);
  const [count2,setCount2] = useState(0);

  // Update counter state 1
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  //update counter state two counter 2
const increaseC2 = () => {
    setCount2(count2 + 1 );
};
const  decreaseC2 = () => {
    setCount2(count2 - 1);
};

//useEffect

useEffect(() => {

    console.log("Componentis mounted");

return () => {
    console.log("Component will unammount");
};
},[count2]
);

  //rendering the component
  return (
    <>
    <div>
          <h1> Counter | useState() </h1>
          {/* <h1> Counter | useState() </h1> */}
          <h2> Counter: {count} </h2>
          {/* Calling state updater */}
          <button onClick={decrease}> - </button>
          <button onClick={increase}> + </button>
      </div><div>
              <h1> Counter | useEffect() </h1>
              <h2> Counter: {count2} </h2>
              <button onClick={decreaseC2}>-</button>
              <button onClick={increaseC2}>+</button>
              
          </div>
          </>
  );

}

export default HookUseState;
