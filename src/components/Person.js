// list rendering 
/*
    instead of displaying everything on 1 file, breakdown the process
    NameList.js will render the list and send it over, Person.js will display it
*/

import React from 'react';

// destructure props as received from Parent component
function Person( {person} ){

    return(
        <div>
            <h2>I am {person.name} and I am {person.age} years old. I know {person.skills}.</h2>
        </div>
    )
}

export default Person;