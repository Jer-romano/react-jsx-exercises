import React from 'react';


const Person = ({name, age, hobbies}) => {
    return (
        <div className='person'>
            <p>Learn some information about this person</p>
            <h3>Name: {name.length > 8 ? name.slice(0, 6) : name}</h3>
            <h3>{age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
            <ul>
                {hobbies.map(hob => <li>{hob}</li>)}
            </ul>
        </div>
    );

};
export default Person;