import React , {useState} from 'react';

function Justtext(props) {
    const [name,setName]=useState("hello");
    const [age, setAge]=useState(0);
    const updateName = () =>{
        setName("Bhanu");
    }
    const updateAge = () =>{
        setAge(age+2);
    }
    return (
        <div>
            <p>Name :{name}</p>
            <button onClick={updateName}>channge</button>
            <p>Age :{age}</p>
            <button onClick={updateAge}>channge</button>
        </div>
    );
}

export default Justtext;