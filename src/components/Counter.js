// setState
/*
    never modify the state directly. if want to modify the state outside of constructor
    method, use setState

    setState works asynchronously , so if there's any method that needs to execute right after
    state is change, place them as callback functions in the setState method.

    if need to update the state based on previous state, use a function in setState instead of
    an object
*/

import React, { Component } from 'react';

class Counter extends Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    increment(){
        // this.setState(
        //     {
        //     count: this.state.count + 1
        // }, 
        // () => { console.log('Callback function val: ' + this.state.count)}
        
        // )

        this.setState( (prevState) => ({
            count: prevState.count + 1
        }))
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return (
            <div>
                <div> count - {this.state.count} </div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        );
    }
}

export default Counter;