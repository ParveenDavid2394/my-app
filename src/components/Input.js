// before this we saw ref to html element, now we can use ref to class as well
// gonna use the Parent component to trigger the focusInfo()

import React, { Component } from 'react'

class Input extends Component{

    constructor(props){
        super()

        // create ref
        this.inputRef = React.createRef();
    }

    focusInfo(){
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <input type="text" ref={ this.inputRef }/>
            </div>
        )
    }
}

export default Input