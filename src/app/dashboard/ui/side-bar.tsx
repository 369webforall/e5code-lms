import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className="w-[100px] h-full border-r">
          <aside>
            <Link href="/dashboard/courses">Course</Link>
          </aside>
        </div>
  )
}

export default Sidebar