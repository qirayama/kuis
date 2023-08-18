import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import './route.css';

const CodeMateri = () => {
    const { word, number, handleEdit, handleDelete, fetchStatus, setFetchStatus, data, setData } = useContext(GlobalContext)

    useEffect(() => {
        //fetch data dengan kondisi
        if (fetchStatus === true) {
            axios.get("http://backendexample.sanbercloud.com/api/contestants")
                .then((res) => setData(() => res.data))
                .catch(() => { })
                .finally(() => setFetchStatus(false))

        }
    }, [fetchStatus, setFetchStatus])

    return (

        <>
            <p> {word} </p>
            <p> {number} </p>
            <hr />
            <div>
                {
                    fetchStatus ? <p>Loading...</p> : (
                        <ul>
                            {data !== null && data.map((res) => {
                                return (
                                    <li className='gap-5'>
                                        {res.name} | &nbsp;
                                        <button class="action-button" onClick={handleEdit} value={res.id}>Edit</button>
                                        <button class="action-button" onClick={handleDelete} value={res.id}>Delete</button>
                                    </li>
                                );
                            })}
                        </ul>
                    )
                }
            </div>
        </>
    )

}

export default CodeMateri