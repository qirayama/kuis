import { useContext } from "react";
import { DashboardLayout } from "../components";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom/dist";

export default function Profile() {
    const { user } = useContext(AuthContext);

    return (
        <DashboardLayout>
            {user ? (<div className="flex items-center pt-8 flex-col gap-4">
                <img src={user.image_url} alt={user.name} />
                <div className="flex flex-col gap-2 text-center">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
                <Link to={'/dashboard/change-password'}>
                    <Button>Ubah Password</Button>
                </Link>
            </div>) : <p>Loading...</p>}
        </DashboardLayout>
    )
}
