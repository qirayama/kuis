import { createContext, useState } from "react"
import { getJobs, postJob, putJob, deleteJob } from "../services/jobs";

export const JobContext = createContext({
    jobs: [],
    isFetching: true,
    fetchJobs: async () => { },
    setIsFetching: async () => { },
    addJob: async () => { },
    removeJob: async () => { },
    editJob: async () => { }
})

export default function JobContextProvider({ children }) {
    const [jobs, setJobs] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const fetchJobs = async () => {
        const { success, data, message } = await getJobs();
        console.log(data)
        if (success) {
            setJobs(data.data);
            console.log(data)
        } else {
            console.log(message);
        }

        setIsFetching(false);
    }

    const addJob = async (job) => {
        setIsFetching(true);
        const { success, data, message } = await postJob(job);
        if (success) {
            setJobs((prevJobs) => [{ ...job, ...data }, ...prevJobs]);
            console.log(data)
        } else {
            console.log(message);
        }
        setIsFetching(false);
    }

    const editJob = async (job) => {
        setIsFetching(true);
        const { success, data, message } = await putJob(job);
        if (success) {
            setJobs((prevJobs) => {
                console.log(prevJobs);
                const newJobs = [...prevJobs];
                const editedIndex = newJobs.findIndex((g) => g.id === job.id);
                newJobs[editedIndex] = job;
                return newJobs;
            });
            console.log(data)
        } else {
            console.log(message);
        }
        setIsFetching(false);
    }

    const removeJob = async (id) => {
        setIsFetching(true);
        const { success, data, message } = await deleteJob(id);
        if (success) {
            setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
            console.log(data)
        } else {
            console.log(message);
        }

        setIsFetching(false);
    }

    return (
        <JobContext.Provider value={{
            jobs,
            isFetching,
            fetchJobs,
            setIsFetching,
            addJob,
            removeJob,
            editJob
        }}>
            {children}
        </JobContext.Provider>
    )
}
