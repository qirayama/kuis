import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { JobContext } from "../contexts/JobContext";
import { getFormattedCurrency, getRelativeDate } from "../utils";
import { GuestLayout } from "../components";
import { Badge } from "flowbite-react";

export default function JobDetails() {
    const { id } = useParams();
    const {job, isFetching, fetchJobById} = useContext(JobContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchJobById(id)
        .then((success) => {
            console.log(success);
            if(!success) navigate('/404')
        });
    }, [fetchJobById, id, navigate])

    return (
        <GuestLayout>
        <div className="pt-8">
            {!isFetching && job ? (
                <div className="flex flex-col gap-4 max-w-xl mx-auto p-4 shadow-lg">
                    <div className='flex justify-center'>
                        <img className='h-72 object-contain object-center' src={job.company_image_url} alt={job.company_name} />
                    </div>
                    <div className="p-4 flex flex-col gap-6">
                        <div className='flex flex-col gap-2'>
                            <p className='text-xl font-semibold text-slate-800'>{job?.title}</p>
                            <p className='w-fit'>{+job.job_status ? <Badge color="info">Active</Badge> : <Badge color="failure">Non Active</Badge>}</p>
                            <p className='inline-flex gap-1 text-slate-600 font-semibold'>
                                {job.company_name}
                                <span className='font-light'>at</span>
                                {job.company_city}
                            </p>
                            <p>{`Posted ${getRelativeDate(job.created_at)}`}</p>
                            <p>{`Salary ${job.salary_min === job.salary_max ? getFormattedCurrency(job.salary_min) : `from ${getFormattedCurrency(job.salary_min)} to ${getFormattedCurrency(job.salary_max)}`}`}</p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col gap-2 flex-1">
                                <p className="font-medium">Tenure</p>
                                <p>{job.job_tenure}</p>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <p className="font-medium">Type</p>
                                <p>{job.job_type}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-medium">Description</p>
                            <p>{job.job_description}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-medium">Qualification</p>
                            <p>{job.job_qualification}</p>
                        </div>
                    </div>
                </div>
            ): <p>Loading...</p>}
        </div>
        </GuestLayout>
    )
}
