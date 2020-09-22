// list rendering 

import React from 'react';
import Person from './Person';

function NameList(props){

    // const names = ['Bruce', 'Clark', 'Diana'];
    // const nameList = names.map( name=> (
    //     <h2> My name is {name} </h2>
    // ));

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skills: 'React'
        },

        {
            id: 2,
            name: 'Clark',
            age: 31,
            skills: 'Angular'
        },

        {
            id: 3,
            name: 'Diana',
            age: 29,
            skills: 'Vue'
        },
    ]

    // send person object as props to Person component
    // can also use index as key but have condition of when to use
    /*
        when to use index
            - when items in list dont have unique id
            - when items in list are static and will not change
            - when items in list will not be filtered or reordered 
    */
   
    const personList = persons.map( (person,index) => (
      <Person key={ index } person={person} />
    ))
    

    return(
        <div>
            { personList}
        </div>
    )
}

export default NameList;