// forwarding refs parent component

import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {

    constructor(props){
        super()

        // create ref
        this.inputRef = React.createRef()
    }

    clickHandler = () =>{
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={ this.clickHandler }>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput