import React, { useState, useCallback, useMemo } from 'react';

//declare to update function
const MyyComponent = () => {
  const [mountFirst, setMountFirst] = useState(false);
  const [mountSecond, setMountSecond] = useState(false);

  const [counter, setCounter] = useState(0);

  const handleMountFirst = useCallback(() => {
    setMountSecond(false);
    setMountFirst(true);
  }, []);

  const handleMountSecond = useCallback(() => {
    setMountSecond(true);
    setMountFirst(false);
  }, []);

  //calc when counter value change
  const isEven = useMemo(() => {
    return counter % 2 === 0;
  }, [counter]);

  return (
    <div>
      <div>
        <p>Counter: {counter}</p>
        <p>Is counter even? {isEven ? 'Yes' : 'No'}</p>
      </div>

      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      </div>

      <div>
        <button onClick={handleMountFirst}>Mount First  </button>
        <button onClick={handleMountSecond}>Mount Second</button>
      </div>

      <div>
        {mountFirst  && <p>Mounting First  Component </p> }
        {mountSecond && <p>Mounting Second Component </p> }
      </div>
    
    </div>
  );
};

export default MyyComponent;
