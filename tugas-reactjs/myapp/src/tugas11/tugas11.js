import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "flowbite-react";
import { getGrade } from "../utils.js";


function Tugas11() {

    const [data, setData] = useState([]); // data.map((murid, index) => ( isi tab )
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [newData, setNewData] = useState({
        name: '',
        course: '',
        score: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [editedData, setEditedData] = useState({
        name: '',
        course: '',
        score: ''
    });

    const handleEdit = (murid) => {
        setEditingId(murid.id);
        setEditedData({
            name: murid.name,
            course: murid.course,
            score: murid.score
        });
    };

    useEffect(() => {
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
            .then((res) => {
                console.log(res.data)
                setData(res.data);
                setIsLoading(false)
            })
            .catch((error) => {
                setIsError(true);
                setIsLoading(false)
            })
    }, [])

    const handleSubmit = () => {
        const dataToSend = composeData(newData);
        axios.post("https://backendexample.sanbercloud.com/api/student-scores", dataToSend)
            .then((res) => {
                // Update data state with the new data
                setData([...data, res.data]);
                // Reset the newData state for the next input
                setNewData({
                    name: '',
                    course: '',
                    score: ''
                });
            })
            .catch((error) => {

            });
    };

    const handleDelete = (id) => {
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${id}`)
            .then(() => {
                // Remove the deleted data from the state
                setData(data.filter(item => item.id !== id));
            })
            .catch((error) => {

            });
    };

    const handleUpdate = (id) => {
        const dataToUpdate = composeData(editedData);
        axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${id}`, dataToUpdate)
            .then((res) => {
                // Update data state with the updated data
                const updatedDataList = data.map(item => {
                    if (item.id === id) {
                        return res.data;
                    }
                    return item;
                });
                setData(updatedDataList);

                // Reset the editing state
                setEditingId(null);
                setEditedData({
                    name: '',
                    course: '',
                    score: ''
                });
            })
            .catch((error) => {

            });
    };


    const composeData = (editedData) => {
        if (editingId) {
            return editedData;
        } else {
            return newData;
        }
    };



    if (isLoading) return 'Loading...';
    return !isError ? (
        <>
            <div className="px-[200px] pb-5 pt-12">
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
                                        {editingId === murid.id ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    value={editedData.name}
                                                    onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                                                />
                                                <input
                                                    type="text"
                                                    value={editedData.course}
                                                    onChange={(e) => setEditedData({ ...editedData, course: e.target.value })}
                                                />
                                                <input
                                                    type="number"
                                                    value={editedData.score}
                                                    onChange={(e) => setEditedData({ ...editedData, score: e.target.value })}
                                                />
                                                <button onClick={() => handleUpdate(murid.id)}>Save</button>
                                                <button onClick={() => setEditingId(null)}>Cancel</button>
                                            </div>
                                        ) : (
                                            <span
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                onClick={() => handleEdit(murid)}
                                            >
                                                <Button color="gray" className='w-fit'>Edit</Button>
                                            </span>
                                        )}
                                        <span
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            onClick={() => handleDelete(murid.id)}
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
            <div className="flex justify-center items-center">
                <div className="w-full bg-white border border-solid border-gray-400 rounded-lg shadow p-5 my-8 mx-[200px]">
                    <div className="flex flex-col gap-3">
                        <b>Nama :</b>
                        <input
                            type="text"
                            placeholder="Nama"
                            value={newData.name}
                            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
                            className="border border-gray rounded-lg p-2"
                        />
                        <b>Mata Kuliah :</b>
                        <input
                            type="text"
                            placeholder="Mata Kuliah"
                            value={newData.course}
                            onChange={(e) => setNewData({ ...newData, course: e.target.value })}
                            className="border border-gray rounded-lg p-2"
                        />
                        <b>Nilai :</b>
                        <input
                            type="number"
                            placeholder="Nilai"
                            value={newData.score}
                            onChange={(e) => setNewData({ ...newData, score: e.target.value })}
                            className="border border-gray rounded-lg p-2"
                        />
                        <button
                            className="w-fit p-2.5 flex gap-1.5 bg-red-700 text-white rounded-xl self-start"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    ) : 'Failed'
}

export default Tugas11





