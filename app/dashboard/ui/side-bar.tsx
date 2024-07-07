import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className="w-[100px] h-full border-r">
          <aside className='flex flex-col gap-2'>
            <Link href="/dashboard/courses">Course</Link>
            <Link href="/dashboard/profile">Profile</Link>
          </aside>
        </div>
  )
}

export default Sidebar