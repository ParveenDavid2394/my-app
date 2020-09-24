/*
    Error Boundary 
        - are react components that catch Javascript error in their child component tree,
            log those errors, and display a fall-back UI
        - class component becomes an Error Boundary by defining either or both of the getDerivedStateFromError and componentDidCatch lifecycle methods
        - the placement of the Error Boundary also matters as it controls if the entire app
        should have the fall-back UI or just the component causing the problem
*/

import React, { Component } from 'react'

class ErrorBoundary extends Component{

    constructor(props){
        super()

        this.state ={
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError : true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }

    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h1>Something went wrong</h1>
                </div>
            )
        } else{
            return this.props.children
        }
    }
}

export default ErrorBoundary