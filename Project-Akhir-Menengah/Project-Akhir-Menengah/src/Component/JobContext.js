import { createContext, useState } from "react"
import { getJobs, postJob, putJob } from "../services/games";

export const JobContext = createContext({
    games: [],
    isFetching: true,
    fetchJobs: async () => { },
    setIsFetching: async () => { },
    addJob: async () => { },
    deleteJob: async () => { },
    editJob: async () => { }
})

export default function JobContextProvider({ children }) {
    const [games, setJobs] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const fetchJobs = async () => {
        const { success, data, message } = await getJobs();
        if (success) {
            setJobs(data);
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

    const deleteJob = async (id) => {
        setIsFetching(true);
        const { success, data, message } = await postJob(id);
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
            games,
            isFetching,
            fetchJobs,
            setIsFetching,
            addJob,
            deleteJob,
            editJob
        }}>
            {children}
        </JobContext.Provider>
    )
}
