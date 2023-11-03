//  conditional redering
import React from 'react';

const Greeting = (props) => {
  const { user } = props;

  return (
    <div>
      {user ? (
        <p>Hello, {user}!</p>
      ) : (
        <p>Welcome! To Gauri's App </p>
      )}
    </div>
  );
};

export default Greeting;
