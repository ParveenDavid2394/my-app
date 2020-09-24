// this file will share the count increment functionality from HOC file

import React, { Component } from 'react'
import hoc from './HOC'

class HoverHOC extends Component {

    render() {
        const { name, count, increment } = this.props
        return (
            <div>
                <h2 onMouseOver={increment}>{name} Hovered {count} times</h2>
            </div>
        )
    }
}

// add the HOC function
export default hoc(HoverHOC,10)