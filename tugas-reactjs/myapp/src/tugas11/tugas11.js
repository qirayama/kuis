import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "flowbite-react";
import { getGrade } from "../utils";

function Tugas11() {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
            .then((res) => {
                setData(res.data);
                setIsLoading(false)
            })
            .catch((error) => {
                setIsError(true);
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return 'Loading...';
    return !isError ? (
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
    ) : 'Failed'
}

export default Tugas11





