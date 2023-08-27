import { useContext, useEffect } from 'react'
import { JobContext } from '../contexts/JobContext'
import { getFormattedCurrency, getRelativeDate } from '../utils';
import { GuestLayout } from '../components';
import { Link } from 'react-router-dom/dist';
import { Badge } from 'flowbite-react';

export default function Home() {
    const { isFetching, jobs, fetchJobs } = useContext(JobContext);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs])

    return (
        <GuestLayout>
            <div className='p-8'>
                {isFetching ? <p>Loading...</p> : (
                    <div className='grid grid-cols-3 gap-8'>
                        {jobs.map((job) => (
                            <div key={job.id} className='shadow-xl'>
                                <div className='flex justify-center'>
                                    <img className='h-52 object-contain object-center' src={job.company_image_url} alt={job.company_name} />
                                </div>
                                <div className='flex flex-col gap-2 p-4'>
                                    <Link to={'/'+job.id}>
                                        <p className='text-xl font-semibold text-slate-800 hover:underline'>{job?.title}</p>
                                    </Link>
                                    <p className='w-fit'>{+job.job_status ? <Badge color="info">Active</Badge> : <Badge color="failure">Non Active</Badge>}</p>
                                    <p>{`Salary ${job.salary_min === job.salary_max ? getFormattedCurrency(job.salary_min) : `from ${getFormattedCurrency(job.salary_min)} to ${getFormattedCurrency(job.salary_max)}`}`}</p>
                                    <p className='inline-flex gap-1 text-slate-600 font-semibold'>
                                        {job.company_name}
                                        <span className='font-light'>at</span>
                                        {job.company_city}
                                    </p>
                                    <p>{`Posted ${getRelativeDate(job.created_at)}`}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </GuestLayout>
    )
}