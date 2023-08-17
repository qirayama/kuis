import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "flowbite-react";
import { getGrade } from "../utils.js";

function Tugas10() {

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

        </>
    ) : 'Failed'
}

export default Tugas10





