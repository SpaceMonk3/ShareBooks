import Image from 'next/image'
import styles from './page.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  if(!session){
    return "not logged in";
  }
  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button className="bg-white p-2 px-4 rounded-lg"> Login with Google </button>
      </div>
    </div>
  )
}
