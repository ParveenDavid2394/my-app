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
import Inline from './components/Inline';
import styles from './components/Style.module.css';
import './components/myStyles.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Errors from './components/Error';
import ErrorBoundary from './components/ErrorBoundary'
import ClickHOC from './components/ClickHOC';
import HoverHOC from './components/HoverHOC';
import Render from './components/Render';
import ClickRender from './components/ClickRender';
import HoverRender from './components/HoverRender';


function App() {
  return (
    <div className="App">
    <Render render={ (count, increment) =>  
       ( <ClickRender count={count} increment={increment} /> )}

    />
    <Render render={(count, increment) =>
        (<HoverRender count={count} increment={increment} />)
    } />
    
    {/* <ClickHOC display='Displayed'/>
    <HoverHOC /> */}
    {/* <ErrorBoundary>
        <Errors heroName="Batman" />
    </ErrorBoundary>
    <ErrorBoundary>
        <Errors heroName="Superman" />
    </ErrorBoundary>
    <ErrorBoundary>
        <Errors heroName="Joker" />
    </ErrorBoundary> */}
    {/* <PortalDemo /> */}
    {/* <FRParentInput /> */}
    {/* <FocusInput /> */}
    {/* <RefsDemo /> */}
    {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
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
        {/* <Stylesheet primary={ true }/> */}
        {/* <Inline />
        <h1 className={styles.success}>This style is from a module </h1>
        <h1 className='danger'>This is a style from css file</h1> */}
        {/* <Form /> */}
    </div>
  );
}

export default App;
