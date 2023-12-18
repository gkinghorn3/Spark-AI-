'use client';
import { useUser } from '@clerk/nextjs'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button'



const LandingPage = () => {

const { user } = useUser()
const Router = useRouter()

if (user) {
  Router.push('/dashboard')
}

 return (
   <>
       <p>landing page</p>
       <Link href='/sign-in'>
        <Button>Login</Button>
       </Link>
       <Link href='/sign-up'>
        <Button>Sign Up</Button>
       </Link>
   </>
 )

}

export default LandingPage;