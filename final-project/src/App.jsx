import { Route, Routes } from "react-router-dom";
import { AddJob, ChangePassword, Dashboard, EditJob, Home, JobDetails, List, Login, NotFound, Profile, Register } from './pages'
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { getAuthUser } from "./utils";

export default function App() {
  const { user } = useContext(AuthContext);

  if (!getAuthUser()) {
    return (
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/:id" Component={JobDetails} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/404" Component={NotFound} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/:id" Component={JobDetails} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/list-job-vacancy" Component={List} />
      <Route path="/dashboard/list-job-vacancy/add" Component={AddJob} />
      <Route path="/dashboard/list-job-vacancy/edit/:id" Component={EditJob} />
      <Route path="/dashboard/profile" Component={Profile} />
      <Route path="/dashboard/change-password" Component={ChangePassword} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/404" Component={NotFound} />
      <Route path="/*" Component={NotFound} />
    </Routes>
  )
}