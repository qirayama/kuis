import { Route, Routes } from "react-router-dom";
import { Dashboard, Home, Login, Register } from './pages'

export default function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
    </Routes>
  )
}