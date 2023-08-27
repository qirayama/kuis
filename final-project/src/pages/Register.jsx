import { useContext, useState } from 'react'
import { GuestLayout } from '../components'
import { Button } from 'flowbite-react'
import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/authContext'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const { register } = useContext(AuthContext);
    const navigator = useNavigate();
    const [data, setData] = useState({
        name: '',
        image_url: '',
        email: '',
        password: '',
    })

    const onChangeHandle = (e) => {
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    }

    const onSubmitHandle = async (e) => {
        e.preventDefault();
        if (data.password.length < 8) toast.error('Password must be at least 8 character')
        else {
            const success = await register(data);
            if (success) navigator('/dashboard')
        }
    }

    return (
        <GuestLayout>
            <div className='flex justify-center mt-8'>
                <form className='flex flex-col gap-4 w-72' onSubmit={onSubmitHandle}>
                    <input type='text' name='name' placeholder='Name' value={data.name} onChange={onChangeHandle} required />
                    <input type='text' name='image_url' placeholder='Umage Url' value={data.image_url} onChange={onChangeHandle} required />
                    <input type='text' name='email' placeholder='Email' value={data.email} onChange={onChangeHandle} required />
                    <input type='password' name='password' placeholder='Password' value={data.password} onChange={onChangeHandle} required />
                    <Button type="submit">Register</Button>
                </form>
            </div>
        </GuestLayout>
    )
}
