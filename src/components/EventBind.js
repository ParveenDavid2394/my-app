// event binding

import React, { Component } from 'react';

class EventBind extends Component{

    constructor(props){
        super();

        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler(){

    //     // this.setState({
    //     //     message: 'Thank You'
    //     // })

    //     console.log(this.setState());
    // }

    clickHandler = () =>{
        this.setState({
            message: 'Thank you',
            
        })
        
        console.log(this)
    } 

    render(){

        return (
            <div>
                <div> {this.state.message} </div>
                {/* <button onClick={ this.clickHandler.bind(this) } >Bind Me</button> */}
                {/* <button onClick={ () => this.clickHandler() }>Bind Me</button> */}
                {/* <button onClick= {this.clickHandler} >Click Me</button> */}
                <button onClick= {this.clickHandler} >Click Me</button>
            </div>
        )
    }
}

export default EventBind;