import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

function Tugas11() {

    const [editingId, setEditingId] = useState(null);
    const [data, setData] = useState([]); // data.map((game, index) => ( isi tab )
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [newData, setNewData] = useState({
        image_url: '',
        name: '',
        category: '',
        description: '',
        price: '',
        rating: '',
        release_year: '',
        size: '',
        is_android_app: '',
        is_ios_app: '',
    });


    useEffect(() => {
        axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
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

    const handleSubmit = async () => {
        if (!editingId) {
            axios.post("https://backendexample.sanbercloud.com/api/mobile-apps", newData)
                .then((res) => {
                    // Update data state with the new data
                    setData([...data, res.data]);
                    // Reset the newData state for the next input
                    setNewData({
                        image_url: '',
                        name: '',
                        category: '',
                        description: '',
                        price: '',
                        rating: '',
                        release_year: '',
                        size: '',
                        is_android_app: '',
                        is_ios_app: '',
                    });
                })
                .catch((error) => {

                });
        }
        else {
            axios.put("https://backendexample.sanbercloud.com/api/mobile-apps/" + editingId, newData)
                .then((res) => {
                    // Update data state with the new data
                    const newDataList = [...data];
                    const editedIndex = newDataList.findIndex((g) => g.id === editingId);
                    newDataList[editedIndex] = res.data

                    setData(newDataList);
                    // Reset the newData state for the next input
                    setNewData({
                        image_url: '',
                        name: '',
                        category: '',
                        description: '',
                        price: '',
                        rating: '',
                        release_year: '',
                        size: '',
                        is_android_app: '',
                        is_ios_app: '',
                    });
                })
                .catch((error) => {

                });
        }

    };

    const handleEdit = async (id) => {
        setEditingId(id)
        const game = await axios(`https://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
        console.log(game);
        setNewData(() => game.data)

    }


    const handleDelete = (id) => {
        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
            .then(() => {
                // Remove the deleted data from the state
                setData(data.filter(item => item.id !== id));
            })
            .catch((error) => {

            });
    };




    if (isLoading) return 'Loading...';
    return !isError ? (
        <>
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Quiz 3 | Ariq Monetra
                        </span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button"
                        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link to="/"
                                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/manage-data"
                                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Manage
                                    Data</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="px-[200px] pb-5 pt-12">
                <Table className='shadow'>
                    <Table.Head>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>NO</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>NAMA</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>KATEGORI</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>DESCRIPTION</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>PRICE</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>RATING</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>RELEASE YEAR</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>SIZE</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>IS_ANDROID_APP</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>IS_IOS_APP</Table.HeadCell>
                        <Table.HeadCell className='bg-violet-600 text-white p-4'>EDIT</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            data.map((game, index) => (
                                <Table.Row key={game.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
                                    <Table.Cell>{game.name}</Table.Cell>
                                    <Table.Cell>{game.category}</Table.Cell>
                                    <Table.Cell>{game.description}</Table.Cell>
                                    <Table.Cell>{game.price}</Table.Cell>
                                    <Table.Cell>{game.rating}</Table.Cell>
                                    <Table.Cell>{game.release_year}</Table.Cell>
                                    <Table.Cell>{game.size}</Table.Cell>
                                    <Table.Cell>{game.is_android_app}</Table.Cell>
                                    <Table.Cell>{game.is_ios_app}</Table.Cell>
                                    <Table.Cell className='pl-4 flex gap-1.5'>
                                        <span
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            onClick={() => handleEdit(game.id)}
                                        >
                                            <Button color="gray" className='w-fit'>Edit</Button>
                                        </span>

                                        <span
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            onClick={() => handleDelete(game.id)}
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
                    {/* Input */}
                    <div className="flex flex-col gap-5">
                        <b className="text-2xl">Create Data</b>
                        <b className="border-b border-gray-500 mb-3">Gambar Data Game</b>
                        <strong>Image URL</strong>
                        <input
                            type="text"
                            value={newData.image_url}
                            onChange={(e) => setNewData({ ...newData, image_url: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
                        />
                        <b className="border-b border-gray-500 mb-3">Data Game</b>
                        <b>Name</b>
                        <input
                            type="text"
                            value={newData.name}
                            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
                        />
                        <b>Category</b>
                        <input
                            type="text"
                            value={newData.category}
                            onChange={(e) => setNewData({ ...newData, category: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
                        />
                        <b>Description</b>
                        <input
                            type="text"
                            value={newData.description}
                            onChange={(e) => setNewData({ ...newData, description: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
                        />
                        <b>Price</b>
                        <input
                            type="text"
                            value={newData.price}
                            onChange={(e) => setNewData({ ...newData, price: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
                        />
                        <b>Rating</b>
                        <input
                            type="text"
                            value={newData.rating}
                            onChange={(e) => setNewData({ ...newData, rating: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
                        />
                        <b>Release Year</b>
                        <input
                            type="text"
                            value={newData.release_year}
                            onChange={(e) => setNewData({ ...newData, release_year: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
                        />
                        <b>Size</b>
                        <input
                            type="number"
                            value={newData.size}
                            onChange={(e) => setNewData({ ...newData, size: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
                        />
                        <b className="border-b border-gray-500 mb-3">Jenis Perangkat</b>
                        <b>Android?</b>
                        <input
                            type="text"
                            value={newData.is_android_app}
                            onChange={(e) => setNewData({ ...newData, is_android_app: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
                        />
                        <b>IOS?</b>
                        <input
                            type="text"
                            value={newData.is_ios_app}
                            onChange={(e) => setNewData({ ...newData, is_ios_app: e.target.value })}
                            className="border border-gray rounded-lg p-2 bg-gray-50"
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





