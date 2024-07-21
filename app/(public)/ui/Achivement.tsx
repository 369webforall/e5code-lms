// Achievement.js or Achievement.tsx

import React from "react";

const Achievement = () => {
  return (
    <div className="bg-white my-4 shadow-md rounded-lg p-4">
      <div className="space-y-4">
        <h2 className="h2-bold">TRAINING INCLUDES:</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>
            Theory and Practical Sessions: Dive into comprehensive theoretical
            concepts accompanied by hands-on practical sessions to reinforce
            learning.
          </li>
          <li>
            Daily Assignments: The success of this couse is entirly dependent on
            you and your ability to practice all the concepts taught in each
            class, work on the assigned projects, and you do enough revision.
            (At least 3 to 4 hours of daily work is my advice after class, in
            order to practice what you have learned.)
          </li>
          <li>
            {" "}
            Project-Based Learning: Apply your knowledge through real-world
            projects, fostering practical skills crucial for the industry.
          </li>
          <li>
            {" "}
            In-Depth Topic Coverage: Each topic is explored in detail to ensure
            a thorough understanding and mastery.
          </li>
          <li>
            Measuring Student Progress: Each module will include a set of
            projects that students need to complete by following the proper
            development process. We will be using Git and GitHub for our
            projects. By evaluating your work on GitHub, we can track your
            progress and ensure you are mastering the material. Additionally,
            your work on GitHub is crucial during job searches, as it showcases
            your skills to potential employers.
          </li>
          <li>
            {" "}
            Course Completion Certificate: Upon finishing the course, receive a
            certificate acknowledging your accomplishment from our institution.
          </li>
        </ul>
      </div>
      <div className="space-y-4 my-4">
        <h2 className="h2-bold">Why you should join Us:</h2>

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
            Skill Development: Upon completing the course and all the exercises,
            you will possess robust skills in front-end and back-end web design,
            API building, and more
          </li>
          <li>
            Job interviews and your Resumé: You will find resources and
            guideline on interview preparation, resumé creation, and optimising
            your LinkedIn profile to enhance your job prospects.
          </li>
          <li>
            Remote Jobs: We will provide you with a list of websites for remote
            job searches. We encourage students to apply to 10 jobs daily and
            follow up on their applications. This information will be available
            2 months before the completion of the course.
          </li>
          <li>
            Remote Work Readiness: Acquire all necessary skills to list yourself
            as an online freelancer, preparing you for the job market.
          </li>
          <li>
            Course Certification: We will provide the course completion
            certificate from Velisa Africa.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="h2-bold">WHO CAN JOIN:</h2>

        <p>
          Beginners in Web Development: Individuals with basic computer skills
          and a strong eagerness to learn web development are welcome to join.
          Be prepared for a long journey and hard work on a daily basis for at
          least 12 months to achieve mastery.
        </p>
        <p>
          Programming Enthusiasts: Whether you&#39;re new to programming or have
          some experience in other languages, our course is designed to
          accommodate learners of all levels and help you advance your skills
        </p>
        <p>
          Computer Graduates and College Students: Whether you are a recent
          computer science graduate starting your job search or a current
          computer science student, this course will significantly enhance your
          skills. It is designed to improve your logical thinking, develop your
          programming abilities, and equip you with strong full-stack web
          development skills.
        </p>
      </div>
    </div>
  );
};

export default Achievement;
