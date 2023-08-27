import { Button } from 'flowbite-react'
import { DashboardLayout } from '../components'
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

export default function ChangePassword() {
  const { changePassword } = useContext(AuthContext);
  const navigator = useNavigate();
  const [data, setData] = useState({
    current_password: '',
    new_password: '',
    new_confirm_password: ''
  })

  const onChangeHandle = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
  }

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    if (data.current_password.length < 8) toast.error('Password must be at least 8 character')
    else if (data.new_password.length < 8) toast.error('New Password must be at least 8 character')
    else if (data.new_password !== data.new_confirm_password) toast.error('New Password Confirmation doesnt match')
    else {
      const success = await changePassword(data);
      if (success) navigator('/dashboard/profile')
    }
  }

  return (
    <DashboardLayout>
      <div className='flex justify-center mt-8'>
        <form className='flex flex-col gap-4 w-72' onSubmit={onSubmitHandle}>
          <input type='password' placeholder='Current Password' name='current_password' value={data.current_password} onChange={onChangeHandle} required />
          <input type='password' placeholder='New Password' name='new_password' value={data.new_password} onChange={onChangeHandle} required />
          <input type='password' placeholder='New Confirm Password' name='new_confirm_password' value={data.new_confirm_password} onChange={onChangeHandle} required />
          <Button type="submit">Change Password</Button>
        </form>
      </div>
    </DashboardLayout>
  )
}
