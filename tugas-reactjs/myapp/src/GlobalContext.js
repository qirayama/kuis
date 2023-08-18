import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    const [word, setWord] = useState("Halo, saya state 1 dari context")
    const [number, setNumber] = useState("Halo, saya state 2 dari context")
    //materi fetching data
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    //materi create data
    const [input, setInput] = useState({ name: "" })
    //indikator
    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)

    //handling input
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        if (name === "name") {
            setInput({ ...input, name: value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            name
        } = input

        if (currentId === -1) {
            //create data
            setFetchStatus(true)
            axios.post('https://backendexample.sanbercloud.com/api/contestants', { name })
                .then((res) => {
                    setData(prevData => [...prevData, res.data])
                    navigate("/code-materi")
                })
                .finally(() => setFetchStatus(false))
        } else {
            // update data
            setFetchStatus(true)
            axios.put(`https://backendexample.sanbercloud.com/api/contestants/${currentId}`, { name })
                .then(() => {
                    const newData = [...data];
                    const index = newData.findIndex((d) => d.id === currentId);
                    newData[index].name = name;
                    setData(() => newData);
                    navigate("/code-materi");
                })
                .finally(() => setFetchStatus(false))
        }

        //balikin indikator ke -1
        setCurrentId(-1)
        //clear input setelah create data
        setInput({ name: "" })
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        setFetchStatus(true);
        axios.delete(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
            .then(() => setData((prevData) => prevData.filter((d) => d.id !== idData)))
            .finally(() => setFetchStatus(false))
    }

    const handleEdit = (event) => {
        let IdData = parseInt(event.target.value)
        setCurrentId(IdData)
        navigate(`/edit/${IdData}`)
    }

    return (
        <GlobalContext.Provider value={
            {
                word,
                setWord,
                number,
                input,
                fetchStatus,
                data,
                setNumber,
                setInput,
                handleSubmit,
                handleEdit,
                handleDelete,
                handleInput,
                setFetchStatus,
                setData
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}