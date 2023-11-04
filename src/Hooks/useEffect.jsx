import { useState ,useEffect} from "react";

function HookUseEffect(){
    const [count2,setCount2] = useState(0);

const increaseC2 = () => {
    setCount2(count2 + 1 );
};
const  decreaseC2 = () => {
    setCount2(count2 - 1);
};
//useEffect 

useEffect(() => {

    console.log("Component is mounted");

return () => {
    console.log("Component will unammount");
};
},[count2]
);
}

return (
    <div>
     <h1> Counter | useEffect() </h1>
     <h2> Counter: {count2} </h2>
      <button onClick={increaseC2}>Increase</button>
      <button onClick={decreaseC2}>Decrease</button>
    </div>
  );
  

export default HookUseEffect;