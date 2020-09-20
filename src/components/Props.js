// props example
// props are just object that contains attributes and their values that are passed
// from parent component
// props can also access children elements
// props are immutable
// using { } is similar to using ${} in vanilla JS

import React from 'react';

const Props = props =>{
    return (

    <div>
        <h1>This is a prop example with name: {props.name}</h1>
        {props.children}
    </div>

    )
}

export default Props;