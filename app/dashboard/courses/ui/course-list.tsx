import React from 'react';
import CourseCard from './course-card';

const courses = [
    {
      courseId:'html-css',
      title: 'HTML & CSS',
      href:'/dashboard/courses/html-css'
      
    },
   
    {
      courseId:'javascript',
      title: 'JavaScript',
      href:'/dashboard/courses/html-css'
      
    },
    {
      courseId:'react-nextjs',
      title: 'React/Nextjs',
      href:'/dashboard/courses/html-css'
      
    },
    {
      courseId:'nodejs-express',
      title: 'Node.js/Express',
      href:'/dashboard/courses/html-css'
      
    },
 
    {
      courseId:'mongodb',
      title: 'MongoDB',
      href:'/dashboard/courses/html-css'
   
    },
    {
      courseId:'sql',
      title: 'SQL',
      href:'/dashboard/courses/html-css'
  
    },
    {
      courseId:'postgresql',
      title: 'PostgreSQL',
      href:'/dashboard/courses/html-css'
  
    },
    {
      courseId:'tailwind-css',
      title: 'Tailwind CSS',
      href:'/dashboard/courses/html-css'
   
    },
 
  
    {
      courseId:'radix-ui',
      title: 'Radix UI',
      href:'/dashboard/courses/html-css'
    
    },
    {
      courseId:'dsa',
      title: 'Data Structures and Algorithms',
      href:'/dashboard/courses/html-css'

    },
    {
      courseId:'zod',
      title: 'Zod',
      href:'/dashboard/courses/html-css'
    },
    {
      courseId:'branding-networking',
      title:'Branding & Networking',
      href:'/dashboard/courses/html-css'
    },
  {
    courseId:'interview-porcess',
    title:'The Interview Process',
    href:'/dashboard/courses/html-css'
  }
  
  ];
  

const CourseList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} href={course.courseId} />
      ))}
    </div>
  );
}

export default CourseList;
