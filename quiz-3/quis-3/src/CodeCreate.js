import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import './route.css';
import { useNavigate, useParams } from 'react-router-dom';


const CodeMateri = () => {

    let { IdData } = useParams();

    const { word, number, handleSubmit, input, setInput, handleInput } = useContext(GlobalContext)

    //materi fetching data
    const [data, setData] = useState(null)


    let navigate = useNavigate();

    useEffect(() => {
        if (IdData !== undefined) {
            axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps${IdData}`)
                .then((res) => {
                    let data = res.data
                    setInput({ name: data.name })
                })
        }
    }, [])

    return (

        <>
            <p> {word} </p>
            <p> {number} </p>
            <hr />
            <p>FORM DATA</p>
            {/* form data */}
            <form onSubmit={handleSubmit}>
                <span>Nama : </span>
                <input onChange={handleInput} value={input.name} name='name' />
                <input type={'submit'} />
            </form>
        </>
    )

}

export default CodeMateri