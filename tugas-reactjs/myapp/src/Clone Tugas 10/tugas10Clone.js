import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Button, Table } from 'flowbite-react'
import { getGrade } from '../utils'

const App = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://backendexample.sanbercloud.com/api/contestants")
            .then((res) => {
                setData([...res.data])
            })
            .catch((error) => {
            })
    }, [])

    console.log(data)

    return (
        <>
            <div className="px-[200px] pb-12">
                <Table className='shadow'>
                    <Table.Head>
                        <Table.HeadCell className='bg-violet-500 text-white p-4'>NO</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-500 text-white p-4'>NAMA</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-500 text-white p-4'>MATA KULIAH</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-500 text-white p-4'>NILAI</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-500 text-white p-4'>INDEX NILAI </Table.HeadCell>
                        <Table.HeadCell className='bg-violet-500 text-white p-4'>ACTION</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            data.map((murid, index) => (
                                <Table.Row key={murid.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
                                    <Table.Cell>{murid.name}</Table.Cell>
                                    <Table.Cell>{murid.course}</Table.Cell>
                                    <Table.Cell>{murid.score}</Table.Cell>
                                    <Table.Cell>{getGrade(murid.score)}</Table.Cell>
                                    <Table.Cell className='pl-4 flex gap-1.5'>
                                        <span
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            href="/tables"
                                        >
                                            <Button color="gray" className='w-fit'>Edit</Button>
                                        </span>
                                        <span
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            href="/tables"
                                        >
                                            <Button color="gray" className='w-fit bg-red-700 text-white'>Delete</Button>
                                        </span>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table >
            </div >
        </>
    )

}

export default App