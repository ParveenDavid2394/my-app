// event handling

import React from 'react';

function FunctionClick(){

    // function to handle click event
    function clickHandler(){
        console.log('Button Clicked');
    }

    return(
        <div>
            <button onClick={ clickHandler() }>Click</button>
        </div>
    )
}

export default FunctionClick;