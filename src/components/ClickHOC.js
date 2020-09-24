// this file will share the count increment functionality from HOC file


import React, { Component } from 'react'
import hoc from './HOC'

class ClickHOC extends Component{

    render(){
        const { name, count, increment} = this.props
        return(
            <div>
                <button onClick={increment}>{name} Clicked {count} times</button>
            </div>
        )
    }
}

// add the HOC function
export default hoc(ClickHOC)