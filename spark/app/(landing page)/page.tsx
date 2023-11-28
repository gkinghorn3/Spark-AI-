import { Button } from '@/components/ui/button'
import Link from 'next/link';



const LandingPage = () => {
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