// example of stateful class component
import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        // destructuring props in class
        const { name, heroName} = this.props;

        // destructuring state in class
        //const { state1, state2 } = this.state;
        
        return(
            <div>
                <h1>This is a Class Component</h1>
                <h1>Welcome {name} a.k.a {heroName} </h1>
            </div>
        )
    }
}

export default Welcome;