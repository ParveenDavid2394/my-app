import React from 'react';

function ChildComponent(props){
        console.log(props.greetHandler);
        return(
            
            <div>
                {/* Invoking parent method using props */}
                <button onClick= {props.greetHandler } >Greet Parent</button> 

                {/* pass parameters back to Parent method from child components*/}
                <button onClick={() => props.greetHandler('child')} >Greet Parent</button>

            </div>
        )
    
}

export default ChildComponent;