import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
const AboutVision = () => {
  return (
    <section className="bg-gray-100 p-4">
      <div>
        <h2 className="h2-bold">OBJECTIVE</h2>
        <p className="text-gray-700">
          The objective of this course is to equip individuals with the
          knowledge and skills required to become proficient MERN stack
          developers. We aim to provide comprehensive training that covers both
          front-end and back-end development, using modern web technologies and
          best practices.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="h2-bold mb-2">OUTCOME</h2>
        <h3 className="h3-bold mb-4">
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
            Have hands-on experience with serverless architectures, web sockets,
            and other advanced backend concepts.
          </li>
          <li>Be prepared to pursue careers as MERN stack developers.</li>
        </ul>
      </div>
      <div className="my-4 border-2 p-4">
        <h2 className="h2-bold text-green-600 border-b mb-4">Tuition Fee</h2>

        <h3 className="h3-bold">Full Access - (Live Class + Recording)</h3>
        <p className="text-lg font-bold">
          - R2500.00 + 15% VAT (Total: R2875.00)
        </p>

        <h3 className="h3-bold">Video Content - (Pre-recorded classes)</h3>
        <p className="text-lg font-bold">
          - R1500.00 + 15% VAT (Total: R1725.00)
        </p>
        <Button asChild className="mt-4">
          <Link href="/dashboard/bank">EFT Bank Transfer</Link>
        </Button>
        <p>
          Note please login to your account before u can access the back
          details.
        </p>
        <p className="text-md italic mt-4">
          Velsia will provide the account information for fund transfer. Please
          note there will be no refund if a student wants to quit. However, we
          will allow student to join next session, so you are most welcome to
          restart the learning journey.
        </p>
      </div>
    </section>
  );
};

export default AboutVision;
