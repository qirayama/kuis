import React from 'react'
import { useState } from 'react'

const [pesertaLomba, setPesertaLomba] = useState(['Budi', 'Susi', 'Lala', 'Agung'])
const [inputName, setinputName] = useState([""])
const [indexOfFrom, setIndexOfFrom] = useState(-1)

//state di dalam useState() tidak harus berbentuk object.
const [name, setName] = useState("John");
const [age] = useState(21);
const [job, setJob] = useState({
    jobTitle: "UI/UX designer";
    company: "UNIKOM codelabs"
})

//inisiasi state pada class component
constructor(props){
    super(props);
    this.state = {
        name: "john",
        age: 21,
    }
}

const app = () => {
    const [name, setName] = useState('John')
    const handleName = () => {
        setName('Doe')
    }
    return (
        <div className='Card'>
            <h1>Testing</h1>
            <button onClick={handleName}>{name}</button>
        </div>
    )
}

const app = () => {
    const [name, setName] = useState('John')
    const [gender, setGender] = useState('laki-laki')

    return (
        <div className='Card'>
            {gender === "laki-laki" ? <span>Pak</span> : <span>Buk</span>}
            <span> {name} </span>
        </div> ""
    )
}

export default app

