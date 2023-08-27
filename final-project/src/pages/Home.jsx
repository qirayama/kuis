import React, { useContext, useEffect } from 'react'
import { JobContext } from '../contexts/JobContext'
import { getFormattedCurrency, getRelativeDate } from '../utils';
import { GuestLayout } from '../components';

export default function Home() {
    const { isFetching, jobs, fetchJobs } = useContext(JobContext);

    useEffect(() => {
        fetchJobs();
    }, [])

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
                                    <p className='text-xl font-semibold text-slate-800'>{job?.title}</p>
                                    <p className='inline-flex gap-1 text-slate-600 font-semibold'>
                                        {job.company_name}
                                        <span className='font-light'>at</span>
                                        {job.company_city}
                                    </p>
                                    <p>{`Posted ${getRelativeDate(job.created_at)}`}</p>
                                    <p>{`Salary ${job.salary_min === job.salary_max ? getFormattedCurrency(job.salary_min) : `from ${getFormattedCurrency(job.salary_min)} to ${getFormattedCurrency(job.salary_max)}`}`}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </GuestLayout>
    )
}
