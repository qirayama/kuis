import { useContext, useEffect } from 'react';
import { DashboardLayout } from '../components'
import { JobContext } from '../contexts/JobContext';

export default function Dashboard() {
    const {jobs, fetchJobs, isFetching} = useContext(JobContext);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs])

    return (
        <DashboardLayout>
            {
                isFetching ? <p>Loading...</p> : (
                    <div className='flex px-8 gap-8'>
                        <div className='flex flex-col gap-2 p-4 shadow-lg rounded-xl flex-1 text-indigo-900'>
                            <h2 className='font-medium text-xl'>Active Jobs</h2>
                            <p className='text-lg'>{jobs.filter((job) => +job.job_status).length}</p>
                        </div>
                        <div className='flex flex-col gap-2 p-4 shadow-lg rounded-xl flex-1 text-indigo-900'>
                            <h2 className='font-medium text-xl'>Non Active Jobs</h2>
                            <p className='text-lg'>{jobs.filter((job) => !+job.job_status).length}</p>
                        </div>
                        <div className='flex flex-col gap-2 p-4 shadow-lg rounded-xl flex-1 text-indigo-900'>
                            <h2 className='font-medium text-xl'>Total Jobs</h2>
                            <p className='text-lg'>{jobs.length}</p>
                        </div>
                    </div>
                )
            }
        </DashboardLayout>
    )
}
