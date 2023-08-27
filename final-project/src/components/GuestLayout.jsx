import React from 'react'
import { Link } from 'react-router-dom'

export default function GuestLayout({ children }) {
    return (
        <>
            <div className="flex justify-between p-6 bg-indigo-600 text-white">
                <Link to="/" className="font-bold text-xl">Job Connect</Link>
                <div className='flex gap-6'>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
            {children}
        </>
    )
}
