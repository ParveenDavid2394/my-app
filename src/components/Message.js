// State Vs Props
/*
    Props
        - gets passed to the component
        - are function parameters
        - are immutable ( because passed down from parent component to child components, props owned by the parent and cannot be changed by the children)
        - can be accessed using 
            props -> Functional Components
            this.props -> Class Components

    State
        - is managed within the component
        - variables declared in the function body
        - component has full control to change the state
        - can be accessed using 
            useState Hook -> Functional Components
            this.state -> Class Components
*/

import React, { Component } from 'react';

class Message extends Component{

    // declare state in constructor method
    constructor(){
        // make sure to call Parent class constructors
        super();

        this.state = {
            message: 'Welcome Visitor',
        }
    }

    render(){
        return <h1> {this.state.message} </h1>
    }
}

export default Message;