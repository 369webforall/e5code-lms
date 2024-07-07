import React from "react";

const AboutVision = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div>
          <h2 className="text-lg font-semibold">OBJECTIVE</h2>
          <p className="text-gray-700">
            The objective of this course is to equip individuals with the
            knowledge and skills required to become proficient MERN stack
            developers. We aim to provide comprehensive training that covers
            both front-end and back-end development, using modern web
            technologies and best practices.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">OUTCOME</h2>
          <h3 className="text-md mb-4">
            Upon completing the courses students should:
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              {" "}
              Have a strong understanding of HTML, CSS, JavaScript, and related
              front-end technologies.
            </li>
            <li>
              Be proficient in building dynamic web applications using React.js,
              Next.js, and state management libraries like Recoil.
            </li>
            <li>
              {" "}
              Possess the skills to design and implement back-end systems using
              Node.js, Express.js, and databases like MongoDB and PostgreSQL.
            </li>
            <li>
              Be familiar with DevOps practices, including containerization with
              Docker, version control with Git and GitHub, and continuous
              integration and deployment using tools like GitHub Actions.
            </li>
            <li>
              Have hands-on experience with serverless architectures, web
              sockets, and other advanced backend concepts.
            </li>
            <li>Be prepared to pursue careers as MERN stack developers.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
