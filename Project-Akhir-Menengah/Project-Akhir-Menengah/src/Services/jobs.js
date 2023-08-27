import axios from "axios";

export const getJobs = async () => {
    try {
        const response = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy');
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

export const postJob = async (job) => {
    try {
        const response = await axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', job);
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

export const putJob = async (job) => {
    try {
        const response = await axios.put('https://dev-example.sanbercloud.com/api/job-vacancy/' + job.id, job);
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

export const deleteJob = async (id) => {
    try {
        const response = await axios.delete('https://dev-example.sanbercloud.com/api/job-vacancy/' - id);
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

