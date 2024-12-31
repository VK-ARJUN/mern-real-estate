import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-3xl text-center font-semibold my-7 text-blue-500'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='border border-gray-300 rounded-lg p-3 ' id='username' />
        <input type='email' placeholder='Email' className='border border-gray-300 rounded-lg p-3 ' id='email'/>
        <input type='password' placeholder='Password' className='border border-gray-300 rounded-lg p-3 ' id='password' />
        <button type='submit' className='bg-blue-500 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
