// this file will share the count increment functionality from HOC file

import React, { Component } from 'react'
import UpdatedComponent from './HOC'

class HoverHOC extends Component {

    constructor(props) {
        super()

        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        //method 1
        // this.setState({
        //     count: this.state.count+1
        // })

        // method 2
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h2 onMouseOver={this.clickHandler}>{this.props.name} Hovered {count} times</h2>
            </div>
        )
    }
}

// add the HOC function
export default UpdatedComponent(HoverHOC)