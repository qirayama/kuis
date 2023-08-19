import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'

const CodeMateri = () => {
    const { handleEdit, handleDelete, fetchStatus, setFetchStatus, data, setData } = useContext(GlobalContext)

    useEffect(() => {
        //fetch data dengan kondisi
        if (fetchStatus === true) {
            axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
                .then((res) => setData(() => res.data))
                .catch(() => { })
                .finally(() => setFetchStatus(false))

        }
    }, [fetchStatus, setFetchStatus])

    return (

        <>
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