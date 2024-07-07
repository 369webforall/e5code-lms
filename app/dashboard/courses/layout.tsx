import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'e5code | course',
  description: 'Welcome to online e5code FullStack coaching center.Explore comprehensive online coaching covering Frontend, Backend, MERN Stack.Dive into Data Structures and Algorithms,and DevOps.',
}

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
   <div className='flex gap-2 p-4 h-full'>
        {children}
     
        </div>
    
  )
}
