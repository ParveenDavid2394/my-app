// Fragments
/*
    Fragments allows to group a list of children elements without adding
    extra nodes on the DOM

    for example, this parent component has a table element and the columns are in a child 
    component. If we return it in a div from the child element,we will get an error.
    So solution is to use <React.Fragment>

    when returning a list using React.Fragment we can utilise the key in the tag
    <React.Fragment key={item.id}>
    
    another shorthand for <React.Fragment> is empty tag <> This is React.Fragment shorthand </>
*/

import React from 'react';

function FragmentDemo(props){

    return(
        // instead of div, use React.Fragment. will avoid creation of extra div node
        <React.Fragment>
            <h1>
                Fragment Demo
            </h1>
            <p>This is a desc about fragment demo.</p>
        </React.Fragment>
    )
}

export default FragmentDemo