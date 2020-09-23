// forwarding refs child component
// in order to forward ref from parent component, need to declare functio using 
// arrow function

/*
    'ref 'in React  is basically used to access HTML nodes, in the previous we learned that refs can also be used to access components in React, in a similar way we did the HTML element.
    Here we referenced the Child Component as well, but then we used React.forwardRef() to forward the reference from the child component to the input element inside the component.
    Thus we were directly able to access the focus() method of <input> tag directly in our Parent Component via this.inputRef.current.focus(). if we would'nt have forwarded the ref  we could'nt have accessed it directly via  the current object.

*/

import React from 'react'

// function FRInput(){

//     return(
//         <div>
//             <input type="text"/>
//         </div>
//     )
// }

const FRInput = React.forwardRef( (props, ref) =>{
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRInput