import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
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

    const [jobData, setJobData] = useState([]);
    const apiUrl = 'https://dev-example.sanbercloud.com/api/job-vacancy?page=1';

    useEffect(() => {
        async function fetchJobData() {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJobData(data.data);
                console.log(data.data);
            } catch (error) {
                console.error('Error fetching job data:', error);
            }
        }

        fetchJobData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        let { image_url, name, category, description, price, rating, release_year, size, is_android_app, is_ios_app,
        } = input
        if (currentId === -1) {
            //create data
            setFetchStatus(true)
            axios.post('https://backendexample.sanbercloud.com/api/contestants', {
                image_url, name, category, description, price, rating, release_year, size, is_android_app, is_ios_app,
            })
                .then((res) => {
                    setData(prevData => [...prevData, res.data])
                    navigate("/code-materi")
                })
                .finally(() => setFetchStatus(false))
        } else {
            // update data
            setFetchStatus(true)
            axios.put(`https://backendexample.sanbercloud.com/api/contestants/${currentId}`, {
                image_url, name, category, description, price, rating, release_year, size, is_android_app, is_ios_app,
            })
                .then(() => {
                    const newData = [...data];
                    const index = newData.findIndex((d) => d.id === currentId);
                    newData[index].image_url = image_url;
                    newData[index].name = name;
                    newData[index].category = category;
                    newData[index].description = description;
                    newData[index].price = price;
                    newData[index].rating = rating;
                    newData[index].release_year = release_year;
                    newData[index].size = size;
                    newData[index].is_android_app = is_android_app;
                    newData[index].is_ios_app = is_ios_app;
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
                setData,
                useEffect

            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}