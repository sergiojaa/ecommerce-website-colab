'use client'
import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  return (
   <div>
        <div className='flex mt-10   '>
          <div>
            <Image
            src="/signUp.png" width={690} height={81} alt="logo" />
          </div>
          <div className='ml-24 mt-12'>
            <div className='flex flex-col gap-1'> 
              <h1 className='text-[36px]'>Create an account</h1>
              <h3 className='text-[16px]'>Enter your details below</h3>
            </div>
            <div>
              <form className='flex mt-7 flex-col gap-10'>
                <input
                placeholder='Name'
                className='border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500'
                type="text" />
                <input
                placeholder='Email or Phone Number'
                className='border-b-2 border-gray-300 w-[370px] focus:outline-none focus:border-b-2 focus:border-blue-500'
                type="text" />
                <input
                placeholder='Password'
                className='border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500'
                type="password" />
                <div className='flex flex-col gap-4'>
                  <div >
                  <button className='bg-[#DB4444]  text-white rounded-sm  px-36 py-5 '>
                  Create Account
                </button>
                  </div>
                  <div className='border-2  border-black flex items-center justify-center gap-3'>
                  <Image src='/Icon-Google.png' width={20} height={20} alt='google icon'/>
                <button className='py-5'>
                Sign Up With Google
              </button>
                </div>
                </div>
             
               
               
              </form>
              <div className='flex justify-center items-center mt-3'>
                <p>Already have account? <Link className='border-b border-b-black' href={'/'}>Log in</Link> </p>
              </div>
             
              
            </div>
          </div>
        </div>
    
   </div>
  );
}
