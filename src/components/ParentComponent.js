// Parent components communicate with child components using props
// when a child components want to communicate with Parent, we still use the props

import React, { Component } from 'react';
import ChildComponent from './ChildComponent';


class ParentComponent extends Component{

    constructor(){
        super()

        this.state = {
            parentName : 'parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
            <div>
                {/* passing method using props from parent component to child components */}
                <ChildComponent greetHandler={ this.greetParent } />

            </div>
        )
    }
}

export default ParentComponent;