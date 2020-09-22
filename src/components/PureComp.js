/*
    Normally we extend class using Component but now we use PureComponent

    PureComponent vs Component

        - purpose for PureComponent is to prevent unnecessary re-rendering and to boost
          performance

        - difference depends on shouldComponentUpdate method

        - Regular Component doesnt implement shouldComponentUpdate method and returns
          true by default always.

        - Pure Component implements shouldComponentUpdate method with shallow props and state
          comparison.

        What is Shallow Comparison?
            - in Primitive Type
                -> a (SC) b returns true if a and b have the same value and are of the same type
                E.g: string 'Marco' (SC) string 'Marco' returns true

            - in Complex Type (objects)
                -> a (SC) b returns true if a and b reference the same exact object
                E.g: var a = {x:1, y:2}
                     var b = {x:1, y:2}
                     var c = a

                     a === b // returns false
                     a === c // returns true because points to the same object

        - so the Pure Component does a (SC) with the prevState against the currentState and 
          a (SC) with prevProps with the currentProps
        - only if there's a difference detected by the SC , the component will re-render

        - good idea to ensure all children components are also pure to avoid unexpected    behaviour

        - never mutate the state. always return a new object that reflects the new state 

*/

import React, { PureComponent } from 'react';

class PureComp extends PureComponent{

    constructor(props){
        super()

        this.state ={
            name:'Marco'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Marco'
            })
        }, 1000);
    }

    render(){
        console.log('Rendering')
        return(
            <div>
                Rendering
            </div>
        )
    }
}


export default PureComp;