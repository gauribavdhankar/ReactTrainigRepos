
import React from 'react';
import './App.css';
// import Component from './components/comp1';
// import Greeting from './components/Greeting';
// import MyComponent from './components/Component';
// import HookUseState from './Hooks/counter';
import MyyComponent from './Hooks/useRef';
import useCounter from './components/costum';
import WithHooksForms from './components/withHookform';
import WithoutHooks from './components/withoutHook';

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
        {/* 
        <div>
          <HookUseState/>
        </div> */}

        {/* <div>
        <MyyComponent/>
        </div> */}

        {/* <useCounter/> */}

        <WithHooksForms/>

        <WithoutHooks/>        
      </header>
    </div>
    </>
  );
}
export default MyComponents;