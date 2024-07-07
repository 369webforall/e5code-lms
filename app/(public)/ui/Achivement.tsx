// Achievement.js or Achievement.tsx

import React from "react";

const Achievement = () => {
  return (
    <div className="bg-white container mx-auto my-4 shadow-md rounded-lg p-6">
      <div className="flex flex-col space-y-2">
        <p>
          <strong className="text-lg">TRAINING INCLUDES:</strong>
        </p>
        <p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              Theory and Practical Sessions: Dive into comprehensive theoretical
              concepts accompanied by hands-on practical sessions to reinforce
              learning.
            </li>
            <li>
              {" "}
              Project-Based Learning: Apply your knowledge through real-world
              projects, fostering practical skills crucial for the industry.
            </li>
            <li>
              {" "}
              In-Depth Topic Coverage: Each topic is explored in detail to
              ensure a thorough understanding and mastery.
            </li>
            <li>
              {" "}
              Course Completion Certificate: Upon finishing the course, receive
              a certificate acknowledging your accomplishment from our
              institution.
            </li>
            <li>
              Exam Guidance: Should you wish to certify, we will assist you with
              exam preparation and booking your exam (your cost)
            </li>
          </ul>
          <strong className="text-lg uppercase">Why you should join Us:</strong>
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Free Demo Class: Experience our teaching style by watching 3
            complimentary video demo classes.
          </li>
          <li>
            Convenient Registration and Payment Methods: Enjoy easy payment
            options for hassle-free enrolment.
          </li>
          <li>
            Recorded Classes: Missed a class? No worries! Access recorded
            sessions at your convenience, to stay on track.
          </li>
          <li>
            Project-Based Learning: Our comprehensive course structure includes
            JavaScript testing, and problem-solving from basic to advanced
            levels, helping you master programming fundamentals, data
            structures, and algorithms.
          </li>
          <li>
            Skill Development: Upon completing the course, you will possess
            robust skills in front-end & back-end web design, API building, and
            more.
          </li>
          <li>
            Job interviews and your Resumé: Receive guidance on interview
            preparation, resumé creation, and optimising your LinkedIn profile
            to enhance your job prospects.
          </li>
          <li>
            Remote Work Readiness: Acquire all necessary skills to list yourself
            as an online freelancer, preparing you for the job market.
          </li>
          <li>
            Course Certification: You will be ready to obtain a certification
            upon course completion, validating your expertise in MERN stack
            development (exam at your own cost)
          </li>
        </ul>
        <p className="my-4">
          <strong className="text-lg">WHO CAN JOIN:</strong>
        </p>
        <p>
          Beginners in Web Development: Individuals with basic familiarity in
          web development are welcome to join and enhance their skills further.
        </p>
        <p>
          Programming Enthusiasts: Whether you&#39;re new to programming or have
          some experience in other languages, our course is designed to
          accommodate learners of all levels.
        </p>
      </div>
    </div>
  );
};

export default Achievement;
