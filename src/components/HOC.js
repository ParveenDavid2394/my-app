// HOC
/*
    Higher Order Components
        - a pattern where a function takes a component as an argument and returns a new component
        - used when there's need to use same functionality in different components
        - purpose is to share common functionality among components
        - prevent duplicate codes
        - encourages reusability

        e.g: 
            const enhancedComponent = higherOrderComponent( originalComponent )

*/
// example of HOC
import React from 'react'

const UpdatedComponent = (OriginalComponent) =>{
    class NewComponent extends React.Component{

        render(){
            return <OriginalComponent name='Marco'/>
        }
    }

    return NewComponent
}

export default UpdatedComponent