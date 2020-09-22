// conditional rendering
/*
    4 ways to
        - if/else
        - element variables
        - ternary conditional operators
        - short circuit operators
*/

import React, { Component } from 'react';

class UserGreeting extends Component{

    constructor(props){
        super()

        this.state ={
            isLoggedIn : false
        }

        // this.click = this.click.bind(this);
    }
    
    // click(){
    //     this.setState({
    //         isLoggedIn: true
    //     })
    // }

    render(){

        // example 1 -> if/else
        // if (this.state.isLoggedIn) {
        //     return <div> Hello Marco </div>
        // }else{
        //    return <div> Welcome Guest </div>
        // }

        // example 2 -> element variable
        // let message;
        // if (this.state.isLoggedIn) {
        //     message =  <div> Hello Marco </div>
        // }else{
        //    message =  <div> Welcome Guest </div>
        // }

        // return <div> { message } </div>

        // example 3 -> ternary operator 
        // return(
        //     this.state.message ?
        //         <div> Welcome Marco</div> : 
        //         <div> Welcome Guest</div>
        // )

        // example 4 -> short circuit operator
        // left side expression is evaluated first, then the JSX on right 
        // will be displayed if the expression is True
        // if it is false, then nothing is displayed
        return this.state.isLoggedIn && <div> Welcome Marco</div>

        // ES6 autobinds thus the prob, use the .bind(this) in constructor
        // return (
        //     <button onClick={ this.click }>Button</button>
        // )
    }
}

export default UserGreeting;