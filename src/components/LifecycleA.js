/*
    When a React Component is created, it goes thru several stages in its life cycle

    React provides methods to override the lifecycle and certain stage 

    there are 4 phases where those lifecycle methods are called
        1. Mounting
            - when an instance of a component is being created and inserted into DOM
            - methods:
                -> constructor(props)
                    - special function that will get called whenver a new component is 
                      created
                    - initializing state
                    - binding the event handlers
                    - do not cause side effects. Ex: HTTP requests
                    - super() -> to get props from base class
                    - only place that can overwrite this.state directly

                -> static getDerivedStateFromProps
                    - used when the state of the component depends on changes in props over time
                    - since static, cannot use 'this' keyword in the method
                    - can simply return an object that represent the new state of the component
                    - do not cause side effects. Ex: HTTP requests

                -> render
                    - only required method
                    - read props & state and return JSX
                    - do not change state or interact with DOM or make AJAX calls
                    - children components lifecycle methods are also executed

                -> componentDidMount
                    - will be called only once immediately after a component and all its children components
                      have been rendered to the DOM
                    - perfect place to cause side effects. E.x: interact with DOM or perform any ajax calls
                      to load data

        2. Updating
            - when a component is being re-rendered as a result of changes to either its
              props or state
            - methods:
                -> static getDerivedStateFromProps
                -> render
                -> shouldComponentUpdate
                -> getSnapshotBeforeUpdate
                -> componentDidUpdate

        3. Unmounting
            - when a component is being removed from the DOM
            - methods:
                -> componentWillUnmount

        4. Error Handling
            - when there is an error during rendering, in a lifecycle method or in
              the constructor of any child component
            - methods: 
                -> static getDerivedStateFromError
                -> componentDidCatch

*/

// Mounting Phase

import React, { Component } from 'react';
import LifecycleB from './LifecycleB';


class LifecycleA extends Component{

    constructor(props){
        super();

        this.state = {
            name: 'Marco'
        }

        console.log('LifeCycle of Parent Class A');
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    render(){

        console.log('LifecycleA render')

        return(
            <div>
                <div>Lifecycle A</div> 
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA;