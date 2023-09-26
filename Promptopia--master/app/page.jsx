'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import Link from "next/link";
import { useState, useEffect } from 'react';
import { signIn, useSession,getProviders } from 'next-auth/react';
const Home = () => {
  const { data: session } = useSession();

  const [providers, setProviders ] = useState(null);



  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
return(
  <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
    {session?.user  ? (
            <Card className="w-[300px] ">
            <CardHeader>
              <CardTitle>Welcome to Quizify 🔥!</CardTitle>
        
              <AlertDialog>
                <AlertDialogTrigger>Generate Questions</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Preparing Test...</AlertDialogTitle>
                    <AlertDialogDescription>
                      Let our AI examine your knowledge grasp with this simple test!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Link href="/quiz">
                    
                      <AlertDialogAction>Continue</AlertDialogAction>
                    
                  </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

            </CardHeader>
           
          </Card>
    )
    :(
      <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Welcome to Quizify 🔥!</CardTitle>
  
        <CardDescription>
          Quizify is a platform for creating quizzes using AI!. Get started
          by loggin in below!
        </CardDescription>
      </CardHeader>
      <CardContent>
              {providers && 
                Object.values(providers).map((provider) => (
                  <Button
                  
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className='black_btn'
                  >
                    Sign In
                  </Button>
                ))}
      </CardContent>
    </Card>
    )
  }
 
</div>
)
}

export default Home;