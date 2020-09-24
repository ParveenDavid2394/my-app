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

        // add common functionality in here
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

        // now can pass state and method as props
        render(){
            return <OriginalComponent name='Marco' count={this.state.count} increment={this.clickHandler}/>
        }
    }

    return NewComponent
}

export default UpdatedComponent