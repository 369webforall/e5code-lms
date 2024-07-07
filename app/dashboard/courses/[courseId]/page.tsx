import React from 'react'

const CourseDetails = ({params}:{params:{courseId:string}}) => {
  return (
    <div className='container mx-auto mt-4'>
        <h1>{params.courseId.toUpperCase()}</h1>
        <p>Course content and class recordings will be available through chat.</p>
    </div>
  )
}

export default CourseDetails