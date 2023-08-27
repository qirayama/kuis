import { GuestLayout } from '../components'

export default function NotFound() {
  return (
    <GuestLayout>
        <div className='flex flex-col justify-center mt-8 text-center text-xl'>
            <p className='font-bold'>404</p>
            <p>NotFound</p>
        </div>
    </GuestLayout>
  )
}
