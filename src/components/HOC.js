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

        Important:
            1 - when using HOC, any props sent from Parent components will be received in HOC rather than in 
                wrapped component.
                So always remember to pass the props to wrapped component from HOC
            2 - HOC can also accept more arguments, just remember the wrappedComponent will always be the first
                argument

*/
// example of HOC
import React from 'react'

const hoc = (WrappedComponent, incrementNum) =>{
    class HOC extends React.Component{

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
                return { count: prevState.count + incrementNum }
            })
        }

        // now can pass state and method as props
        render(){
            return <WrappedComponent name='Marco' 
                                    count={this.state.count} 
                                    increment={this.clickHandler} 
                                    // send props from Parent to wrapped Component
                                    {...this.props}
                    />
        }
    }

    return HOC
}

export default hoc