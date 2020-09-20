// simple example of code with and without JSX

import React from 'react';

// example utilising JSX
// const Hello = () => {
//     return (
//         <div>
//             <h1>
//                 Hello Marco using JSX
//             </h1>
//         </div>
//     );
// }

// example without using JSX
const Hello = () =>{
    return (
        React.createElement('div', { id: 'div-id', className: 'div-class'}, 
        React.createElement('h1', null, 'Hello Marco without JSX'))
    );
}

export default Hello;