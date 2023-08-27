import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router';

export default function GuestLayout({ children }) {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogoutHandle = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className='flex flex-col h-screen w-screen overflow-hidden'>
            <div className="flex justify-between p-6 bg-indigo-600 text-white">
                <Link to="/" className="font-bold text-xl">Job Connect</Link>
                <div className='flex gap-6 items-center'>
                    <Link to="/">Home</Link>
                    {!user && (<>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>)}
                    {user && (<>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={onLogoutHandle}>Logout</button>
                    </>)}
                </div>
            </div>
            <div className='overflow-y-auto h-full'>
                {children}
            </div>
        </div>
    )
}
