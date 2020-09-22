// styling using external style sheet

import React from 'react';
import './myStyles.css';

function Stylesheet(props){
    let className = props.primary ? 'primary' : '';
    return(
        <div>
            <h2 className= {`${className} font-xl`}>Stylesheet</h2>
        </div>
    )
}

export default Stylesheet;