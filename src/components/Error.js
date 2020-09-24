/*
    Error Boundary

    - class component that implements either one or both of the lifecycle methods static
    getDerivedStateFromError or componentDidCatch becomes an error boundary
    
    - Static getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information
*/

import React from 'react'

function Errors({heroName}){

    if(heroName === 'Joker'){
        throw new Error('Not a hero')
    }

    return(
        <div>
            { heroName }
        </div>
    )
}

export default Errors