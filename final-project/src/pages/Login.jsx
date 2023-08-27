import { useContext, useState } from 'react'
import { GuestLayout } from '../components'
import { Button } from 'flowbite-react'
import { AuthContext } from '../contexts/authContext';
import { useNavigate } from 'react-router';

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigator = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const onChangeHandle = (e) => {
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    }

    const onSubmitHandle = async (e) => {
        e.preventDefault();
        const success = await login(data);
        if (success) navigator('/dashboard')
    }

    return (
        <GuestLayout>
            <div className='flex justify-center mt-8'>
                <form className='flex flex-col gap-4 w-72' onSubmit={onSubmitHandle}>
                    <input type='text' placeholder='Email' name='email' value={data.email} onChange={onChangeHandle} required />
                    <input type='password' placeholder='Password' name='password' value={data.password} onChange={onChangeHandle} required />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </GuestLayout>
    )
}
