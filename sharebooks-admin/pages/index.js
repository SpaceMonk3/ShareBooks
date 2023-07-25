import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();
  if(!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full"> 
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg"> Login with Google </button>
        </div>
      </div>
    );
  }
  return (
    <div> Logged in {session.user.email}</div>
  )
}
