import { createContext, useCallback, useState } from "react"
import { getJobs, postJob, putJob, deleteJob, getJobById } from "../services/jobs";
import { toast } from "react-toastify";

export const JobContext = createContext({
    jobs: [],
    job: null,
    isFetching: true,
    fetchJobs: async () => { },
    fetchJobById: async () => { },
    setIsFetching: async () => { },
    addJob: async () => { },
    removeJob: async () => { },
    editJob: async () => { }
})

export default function JobContextProvider({ children }) {
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    const fetchJobs = useCallback(async () => {
        const { success, data, message } = await getJobs();
        console.log(data)
        if (success) {
            setJobs(data.data);
            console.log(data)
        } else {
            console.log(message);
        }

        setIsFetching(false);
    }, []);

    const fetchJobById = useCallback(async (id) => {
        setIsFetching(true);
        const { success, data, message } = await getJobById(id);
        if (success) {
            setJob(() => data);
            console.log(data)
            setIsFetching(false);
            return true;
        } else {
            console.log(message);
            setIsFetching(false);
            return false;
        }

    }, [])

    const addJob = async (job) => {
        setIsFetching(true);
        const { success, data, message } = await postJob(job);
        if (success) {
            setJobs((prevJobs) => [{ ...job, ...data }, ...prevJobs]);
            console.log(data)
            toast.success('Add Job Success')
            setIsFetching(false);
            return true;
        } else {
            console.log(message);
            toast.error('Add Job Failed')
            setIsFetching(false);
            return false;
        }
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
            toast.success('Edit Job Success');
            setIsFetching(false);
            return true;
        } else {
            console.log(message);
            toast.error('Edit Job Failed');
            setIsFetching(false);
            return false
        }
    }

    const removeJob = async (id) => {
        setIsFetching(true);
        const { success, data, message } = await deleteJob(id);
        if (success) {
            setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
            console.log(data)
            toast.success('Delete Job Success');
        } else {
            console.log(message);
            toast.error('Delete Job Failed');
        }

        setIsFetching(false);
    }

    return (
        <JobContext.Provider value={{
            jobs,
            job,
            isFetching,
            fetchJobs,
            setIsFetching,
            addJob,
            removeJob,
            editJob,
            fetchJobById
        }}>
            {children}
        </JobContext.Provider>
    )
}
