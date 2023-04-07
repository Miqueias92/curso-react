import { useEffect } from 'react';
import { useState } from 'react'
// useState it1s a hook to manager values

const Hooks = () => {
    
    let age = 30;
    // [alterValue, consultValue] = useState(40) -> default value
    const [newAge, setNewAge] = useState(40)

    // don't change value
    const changeAge = () => {
        age = 31;
        console.log('Age changed..', age);
    };

    // success change value
    const changeNewAge = () => {
        setNewAge(45);
        console.log('Age changed..', newAge);
    };

    // this hook is executed every time there is a state change
    useEffect(()=> {
        console.log("Testing...");
    });

    return (
        <div>
            <p>Age: {age}</p>
            <button onClick={changeAge}>Change Age</button>
            <hr/>
            <p>New Age: {newAge}</p>
            <button onClick={changeNewAge}>Change new Age</button>
        </div>
    );
}

export default Hooks;