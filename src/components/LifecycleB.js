// child class of LifecycleA

import React, { Component } from 'react';


class LifecycleB extends Component {

    constructor(props) {
        super();

        this.state = {
            name: 'Marco'
        }

        console.log('LifeCycle of Child Class B');
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {

        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB getSnapshotBeforeUpdate')
    }


    render() {

        console.log('LifecycleB render')

        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB;