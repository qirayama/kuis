import React, { useState } from 'react'
import { GuestLayout } from '../components'
import { Button } from 'flowbite-react'

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const onChangeHandle = (e) => {
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    }

    return (
        <GuestLayout>
            <div className='flex justify-center mt-8'>
                <form className='flex flex-col gap-4 w-72'>
                    <input type='text' name='email' value={data.email} onChange={onChangeHandle} />
                    <input type='password' name='password' value={data.password} onChange={onChangeHandle} />
                    <Button>Login</Button>
                </form>
            </div>
        </GuestLayout>
    )
}
