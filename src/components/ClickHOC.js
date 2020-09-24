// this file will share the count increment functionality from HOC file


import React, { Component } from 'react'
import UpdatedComponent from './HOC'

class ClickHOC extends Component{

    constructor(props){
        super()

        this.state = {
            count:0
        }
    }

    clickHandler = () =>{
        //method 1
        // this.setState({
        //     count: this.state.count+1
        // })

        // method 2
        this.setState( prevState =>{
            return { count: prevState.count +1}
        })
    }

    render(){
        const {count} = this.state
        return(
            <div>
                <button onClick={this.clickHandler}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

// add the HOC function
export default UpdatedComponent(ClickHOC)