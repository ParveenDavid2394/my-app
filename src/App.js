import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props from './components/Props';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome name='Bruce Wayne' heroName='Batman'/>
      <Hello />
      <Props name='Marco' />
      <Props name='Children'>
          <p>This is a children element</p>
      </Props>
    </div>
  );
}

export default App;
