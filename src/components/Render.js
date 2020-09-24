/*
    Render Props
        - very similar to HOC but its a pattern rather than a function like HOC
        - actually a technique for sharing code between React components using a 'prop
            whose value is a function'
*/

import React, {Component} from 'react'

class Render extends Component{

    constructor(props){
        super()

        this.state = {
            count:0
        }
    }

    increment = () => {
        this.setState( prevState =>{
            return { count : prevState.count + 1}
        })
    }

    render(){
        return(
            <div>
                {this.props.render(this.state.count, this.increment)}
            </div>
        )
    }
}

export default Render