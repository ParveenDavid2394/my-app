// parent Component that is used to trigger focus method from child component

import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component{

    constructor(props){
        super()

        // create ref
        this.componentRef = React.createRef()
    }

    clickHandler = () =>{
        this.componentRef.current.focusInfo()
    }

    render(){
        return(
            <div>
                {/* pass ref down to child component */}
                <Input ref={this.componentRef} />
                <button onClick={ this.clickHandler }>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput