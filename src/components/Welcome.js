// example of stateful class component
import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        return(
            <div>
                <h1>This is a Class Component</h1>
                <h1>Welcome {this.props.name} a.k.a {this.props.heroName} </h1>
            </div>
        )
    }
}

export default Welcome;