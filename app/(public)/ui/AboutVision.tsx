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
        <div className="my-4 border-2 p-4">
          <h2 className="font-bold text-2xl text-purple-600">Tuition Fee</h2>

          <h3 className="font-semibold text-lg">
            Full Access - (Live Class + Recording)
          </h3>
          <p className="text-lg font-bold">
            - R2500.00 + 15% VAT (Total: R2875.00)
          </p>

          <h3 className="font-semibold text-lg">
            Video Content - (Pre-recorded classes)
          </h3>
          <p className="text-lg font-bold">
            - R1500.00 + 15% VAT (Total: R1725.00)
          </p>

          <p className="text-md italic mt-4">
            Velsia will provide the account information for fund transfer.
            Please note there will be no refund if a student wants to quit.
            However, you will have access to the classes at any time for the
            next 3 years, so you are most welcome to restart the learning
            journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
