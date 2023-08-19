import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "flowbite-react";
import { formatBytes, getGrade } from "./utils.js";
import { Link } from "react-router-dom";


function Home() {

    const [data, setData] = useState([]); // data.map((murid, index) => ( isi tab )
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [newData, setNewData] = useState({
        name: '',
        course: '',
        score: ''
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

            <section class="bg-gray-200 p-5">

                <div class="container mx-auto mt-10">
                    <h1 class="text-xl font-bold ">Find your data that you need!</h1>
                </div>

                <div class="container mx-auto gap-10 grid grid-cols-4">
                    {data.map((game, index) => (
                        <div class="mt-10 min-h-[200px] flex flex-1 max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={game.image_url} class="w-1/3 bg-cover bg-center bg-landscape" />
                            <div class="w-2/3 p-4 h-full flex flex-col">
                                <h1 class="text-gray-900 font-bold text-2xl">
                                    {game.name}
                                </h1>
                                <small>{game.release_year}</small>
                                <p class="mt-2 text-gray-600 text-sm">
                                    {game.description}
                                </p>
                                <div class="flex flex-col gap-1 mt-2 text-gray-500">
                                    <span>{game.category}</span>
                                    <span>{formatBytes(game.size)}</span>
                                    <div className="flex gap-2">
                                        {+game.is_android_app ? <span className="p-1 rounded-sm bg-indigo-600 text-white text-xs">Android</span> : ''}
                                        {+game.is_ios_app ? <span className="p-1 rounded-sm bg-indigo-600 text-white text-xs">IOS</span> : ''}
                                    </div>
                                </div>
                                <div class="flex flex-1 items-end justify-between mt-3">
                                    <h1 class="text-gray-700 h-fit font-bold text-xl">
                                        {+game.price ? Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' }).format(game.price) : 'Free'}
                                    </h1>
                                    <button class="px-3 py-2 h-fit bg-gray-800 text-white text-sm font-bold uppercase rounded">
                                        ⭐ {game.rating}
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </section>
        </>
    ) : 'Failed'
}

export default Home





