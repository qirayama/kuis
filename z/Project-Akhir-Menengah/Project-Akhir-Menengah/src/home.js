import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import { formatRupiah } from "./Services/Rp.js";


function Home() {

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
    return (
        <>
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                            PuWork
                        </span>
                    </a>

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
                    <h1 class="text-xl font-bold text-center">Find Your Dream Job</h1>
                </div>

                <div class=" container mx-auto gap-10 grid grid-cols-3">
                    {jobData.map((job, index) => (
                        <div class=" mt-10 min-h-[200px] flex flex-1 max-w-xl bg-white hover:drop-shadow-2xl rounded-lg overflow-hidden">
                            <img src={job.company_image_url} class="w-1/2 bg-cover bg-center" />
                            <div class="w-2/3 p-4 h-full flex flex-col">
                                <h1 class="text-gray-900 font-bold text-2xl">
                                    {job.company_name}
                                </h1>
                                <small>{job.release_year}</small>
                                <p class="mt-2 text-gray-600 text-sm">
                                    City : {job.company_city}
                                </p>
                                <p class="mt-2 text-gray-600 text-sm">
                                    Description : {job.job_description}
                                </p>
                                <p class="mt-2 text-gray-600 text-sm">
                                    Qualification : {job.job_qualification}
                                </p>
                                <p class="mt-2 text-gray-600 text-sm">
                                    Job Tenure : {job.job_tenure}
                                </p>
                                <p class="mt-2 text-gray-600 text-sm">
                                    Job Type : {job.job_type}
                                </p>
                                <span>
                                    <span class="mt-2 text-gray-600 text-sm">
                                        Salary Range : {formatRupiah(job.salary_min)} -
                                    </span>
                                    <span class="mt-2 text-gray-600 text-sm">
                                        {formatRupiah(job.salary_max)}
                                    </span>
                                </span>
                                <p class="mt-2 text-gray-600 text-sm">
                                    Title : {job.title}
                                </p>
                                <p class="mt-2 font-bold text-gray-600 text-sm">
                                    Hiring Status : {job.job_status === 1 ? 'Active' : 'Not Active'}
                                </p>
                                <p class="mt-2 text-gray-600 text-sm">
                                    ID : {job.id}
                                </p>
                                <p class="mt-2 text-gray-600 text-sm">
                                    {job.created_at}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </section>

            <Footer className="font-bold">
                <span>@AriqMonetra2023</span>
            </Footer>
        </>
    )
}

export default Home





