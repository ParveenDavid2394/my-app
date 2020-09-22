import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props from './components/Props';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';

function App() {
  return (
    <div className="App">
        {/* <Counter />
        <Greet />
        <Welcome name='Bruce Wayne' heroName='Batman'/>
        <Hello />
        <Props name='Marco' heroName = 'IronMan'/>
        <Props name='Children'>
            <p>This is a children element</p>
        </Props>
        <Message/>
        <FunctionClick />
        <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting/> */}
        {/* <NameList /> */}
        <Stylesheet primary={ true }/>
    </div>
  );
}

export default App;
