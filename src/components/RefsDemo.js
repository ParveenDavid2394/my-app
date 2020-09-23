// ref make it possible to access DOM nodes directly within React

// 1. once page is loaded, need to focus the input text using refs
// 2. using refs to fetch input values
// 3. can use callback ref approach, instead of directly accessing need to use a 
//    function to access it

import React, { Component } from 'react';

class RefsDemo extends Component{

    constructor(props){
        super()

        this.inputRef = React.createRef()

        // example of callback ref approach
        this.cbRef = null
        this.setCbRef = element =>{
            this.cbRef = element
        }
    }

    // 1. to enable focus on input text
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)

        if(this.setCbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={ this.clickHandler }>Click</button>
            </div>
        )
    }
}

export default RefsDemo;