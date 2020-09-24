import React, { Component } from 'react'

class HoverRender extends Component {

    render() {
        const { count, increment } = this.props
        return (
            <div>
                <h2 onMouseOver={increment}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverRender