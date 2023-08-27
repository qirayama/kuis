import { Badge, Button, Table } from 'flowbite-react'
import { DashboardLayout } from '../components'
import { useContext, useEffect } from 'react'
import { JobContext } from '../contexts/JobContext'
import { getFormattedCurrency } from '../utils';
import { Link } from 'react-router-dom/dist';

export default function List() {
    const {jobs, fetchJobs, removeJob, isFetching} = useContext(JobContext);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs])

    const onDeleteHandle = async (id) => {
        await removeJob(id)
    }
    

  return (
    <DashboardLayout>
        <div className='container mx-auto my-8 flex flex-col gap-4'>
        {
            isFetching ? <p>Loading...</p> : (
                <>
                    <div className='flex justify-between items-start'>
                        <h1 className='text-xl font-semibold'>Job List</h1>
                        <Link to='/dashboard/list-job-vacancy/add'><Button>Add Job</Button></Link>
                    </div>
                    <Table>
                        <Table.Head>
                        <Table.HeadCell>
                            Job Title
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Description
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Qualification
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Type
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Tenure
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Company
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Salary
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Action
                        </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {jobs.map(job =>(
                                <Table.Row key={job.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {job.title}
                                    </Table.Cell>
                                    <Table.Cell>{job.job_description}</Table.Cell>
                                    <Table.Cell>{job.job_qualification}</Table.Cell>
                                    <Table.Cell>{job.job_type}</Table.Cell>
                                    <Table.Cell>{job.job_tenure}</Table.Cell>
                                    <Table.Cell className='text-center'>{+job.job_status ? <Badge color="info">Active</Badge> : <Badge color="failure">Non Active</Badge>}</Table.Cell>
                                    <Table.Cell>
                                        <div>
                                            <div className='w-12 h-12'>
                                                <img src={job.company_image_url} alt={job.company_name} className='w-full h-full object-contain' />
                                            </div>
                                            <p>{job.company_name}</p>
                                            <p>{job.company_city}</p>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div>
                                            <p>{getFormattedCurrency(job.salary_min)}</p>
                                            <p>to</p>
                                            <p>{getFormattedCurrency(job.salary_max)}</p>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                    <Link
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        to={'/dashboard/list-job-vacancy/edit/'+job.id}
                                    >
                                        Edit
                                    </Link>
                                    <button className='text-rose-600 font-medium hover:underline' type='button' onClick={() => onDeleteHandle(job.id)}>Delete</button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </>
            )
        }
        </div>
    </DashboardLayout>
  )
}
