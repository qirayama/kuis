import { useContext, useEffect, useState } from "react";
import { DashboardLayout } from "../components";
import { Button } from "flowbite-react";
import { JobContext } from "../contexts/JobContext";
import { useNavigate, useParams } from "react-router";

export default function AddJob() {
    const { editJob } = useContext(JobContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const {job, isFetching, fetchJobById} = useContext(JobContext);
    const [data, setData] = useState({
        title : '',
        job_description : '',
        job_qualification : '',
        job_type  : '',
        job_tenure : '',
        job_status  : '',
        company_name  : '',
        company_image_url   : '',
        company_city   : '',
        salary_min : '',
        salary_max: '',
    })

    useEffect(() => {
        if(id){
            fetchJobById(id).then((success) => {
                if(!success) navigate('/404')
            });
        } else navigate('/404')
    }, [fetchJobById, id, navigate])

    useEffect(() => {
        setData((prevData) => ({...prevData, ...job}))
    }, [job])
    

    const onChangeHandle = (e) => {
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    }

    const onSubmitHandle = async (e) => {
        e.preventDefault();
        const success = await editJob(data);
        if (success) navigate('/dashboard/list-job-vacancy')
    }

    return (
        <DashboardLayout>
            <div className="flex justify-center mt-8">
                {(isFetching || !job) ? <p>Loading...</p> : (<form className='flex flex-col gap-4 w-72' onSubmit={onSubmitHandle}>
                    <input type='text' placeholder='Job Title' name='title' value={data.title} onChange={onChangeHandle} required />
                    <input type='text' placeholder='Job Description' name='job_description' value={data.job_description} onChange={onChangeHandle} required />
                    <input type='text' placeholder='Job Qualification' name='job_qualification' value={data.job_qualification} onChange={onChangeHandle} required />
                    <input type='text' placeholder='Job Type' name='job_type' value={data.job_type} onChange={onChangeHandle} required />
                    <input type='text' placeholder='Job Tenure' name='job_tenure' value={data.job_tenure} onChange={onChangeHandle} required />
                    <input type='number' placeholder='Job Status' name='job_status' value={data.job_status} onChange={onChangeHandle} required />
                    <input type='text' placeholder='Company Name' name='company_name' value={data.company_name} onChange={onChangeHandle} required />
                    <input type='text' placeholder='Company Image Url' name='company_image_url' value={data.company_image_url} onChange={onChangeHandle} required />
                    <input type='text' placeholder='Company City' name='company_city' value={data.company_city} onChange={onChangeHandle} required />
                    <input type='number' placeholder='Salary Min' name='salary_min' value={data.salary_min} onChange={onChangeHandle} required />
                    <input type='number' placeholder='Salary Max' name='salary_max' value={data.salary_max} onChange={onChangeHandle} required />
                    <Button type="submit">Edit Job</Button>
                </form>)}
            </div>
        </DashboardLayout>
    )
}
