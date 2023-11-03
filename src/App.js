
import React from 'react';
import './App.css';
// import Component from './components/comp1';
// import Greeting from './components/Greeting';
// import MyComponent from './components/Component';
import HookUseState from './Hooks/counter';


function MyComponents() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        {/* <div>
          {/* example component 
          <Component/> 
          <Greeting user="Gauri" />
          {/* Eg Props 
          <Greeting />
          {/* Component render 
          <MyComponent name="Gauri" />
        </div> */}

        <div>
          <HookUseState/>
        </div>
      </header>
    </div>
    </>
  );
}
export default MyComponents;