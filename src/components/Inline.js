// styling using inline styling

import React from 'react';

function Inline(){

    // create object that contains properties of inline styling
    // make sure to use camelCase

    const heading = {
        fontSize: 72,
        color: 'blue',
        backgroundColor: 'black'
    }

    return (
        <div>
            <h1 className='danger'>This is a style from css file imported in parent component</h1>
            <h2 style= {heading}>
                Inline
            </h2>
        </div>
    )
}

export default Inline;