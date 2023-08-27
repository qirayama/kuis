import { Link, useNavigate } from "react-router-dom/dist";
import GuestLayout from "./GuestLayout";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function DashboardLayout({children}) {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogoutHandle = () => {
        logout();
        navigate('/login');
    }

    return (
        <GuestLayout>
            <div className="flex h-full overflow-hidden">
                <div className="w-40 h-full bg-slate-50 flex flex-col p-4">
                    <div className="flex flex-col gap-4 flex-1">
                        <Link to='/dashboard' className="px-4 py-2 bg-indigo-100 font-medium text-indigo-900 rounded-xl">Dashboard</Link>
                        <Link to='/dashboard/list-job-vacancy' className="px-4 py-2 bg-indigo-100 font-medium text-indigo-900 rounded-xl">Job List</Link>
                        <Link to='/dashboard/profile' className="px-4 py-2 bg-indigo-100 font-medium text-indigo-900 rounded-xl">Profile</Link>
                    </div>
                    <button onClick={onLogoutHandle} className="px-4 py-2 bg-indigo-100 text-left font-medium text-indigo-900 rounded-xl">Logout</button>
                </div>
                <div className="flex flex-col w-full py-8 overflow-y-auto">{children}</div>
            </div>
        </GuestLayout>
    )
}
