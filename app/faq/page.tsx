import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="wrapper">
      <h2 className="h2-bold border-b">FAQ</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What language is the bootcamp taught in?
          </AccordionTrigger>
          <AccordionContent>
            The bootcamp is taught in English. All the documentation is in
            English, so all students must have a good level of understanding of
            written English. <br /> Please note, the facilitator is of Nepali
            origin, so there is an accent to his English, but you will soon get
            used to it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can I join the Web Development course without a technical
            background?
          </AccordionTrigger>
          <AccordionContent>
            No, if you have done some work in web development and know the
            basics of HTML, CSS, and JavaScript, or if you have any programming
            skills, and if you are a computer science student, then you can join
            us. We expect three things from our students: be extremely
            motivated, be curious, and work hard to achieve your goal of running
            your own business in web development. If this sounds like you,
            we&#39;ll be more than happy to have you on board.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            How can I prepare for a full-stack web development bootcamp?
          </AccordionTrigger>
          <AccordionContent>
            There are no extra requirements prior to starting class. I just want
            everyone to maintain a growth mindset, stay organized, and be
            prepared to work hard, as these are essential for success in a
            bootcamp environment. My advice is to work daily for at least 3 to 4
            hours, after each class, to practice what you have learned.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Duration of the Course</AccordionTrigger>
          <AccordionContent>
            It&#39;s a 9-month course. We will do our best to complete the
            course within this time frame. If we determine that the group needs
            more time, we can consider extending the course by an extra month.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How much does the full-stack web development course cost for Full
            Access (Live Class + Recordings) over 9 months?
          </AccordionTrigger>
          <AccordionContent>
            The Full Access tuition fee is{" "}
            <strong>R2500.00 + 15% VAT - (Total: R2875.00)</strong>, which
            includes live classes and recordings over 9 months. The recordings
            will be available online one hour after each class. The cost covers
            the complete course, and students will have access to the course for
            the next 3 years.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            How much does access to the full-stack web development pre-recorded
            classes cost?
          </AccordionTrigger>
          <AccordionContent>
            The pre-recorded video access costs{" "}
            <strong>R1500.00+ 15% VAT - (Total: R1725.00)</strong>. The cost
            covers the complete course recordings over 9 month, and students
            will have access to the course for the next 3 years.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            Is there any extra support for students who subscribe to
            pre-recorded classes?
          </AccordionTrigger>
          <AccordionContent>
            Students can ask questions in the chat group, and you will find
            responses in our revision classes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Success Rule</AccordionTrigger>
          <AccordionContent>
            In order to be successful: Set clear goals, stay committed to your
            goal for the next 9 months, complete daily work, revise regularly,
            follow the guidelines while working on projects.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            How to achive the goal of becoming fullstack web developer after
            completion of course?
          </AccordionTrigger>
          <AccordionContent>
            Solidify fundamentals in HTML, CSS, and JavaScript. Dedicate time to
            practice coding, focusing on data structures, regularly. Make sure
            to complete the daily classwork. Repeat the recorded lectures,
            understand each concept, and practice a minimum of six times. If you
            dedicate 2 to 3 hours of work daily for 9 months, becoming
            proficient in full-stack development is achievable. Stay persistent,
            keep learning, and be patient with yourself as you progress toward
            your goal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>Course Completion Certificate</AccordionTrigger>
          <AccordionContent>
            Upon finishing the course, you will receive a certificate
            acknowledging your accomplishment from our institution. If you wish
            to obtain a globally recognized certification in JavaScript, this
            will be at your own cost, and you are welcome to ask for our
            assistance in selecting the best certification to take.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>Good Internet Connection</AccordionTrigger>
          <AccordionContent>
            A stable and fast internet connection is essential for accessing
            course materials, attending live classes, and participating in
            discussions and for a smooth learning experience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger>
            Any additional support to prepare you for a job search?
          </AccordionTrigger>
          <AccordionContent>
            We will provide guidelines and documentation in several areas to
            help you succeed in your web development career, including:
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Resume building</li>
              <li>Portfolio development</li>
              <li>Improving your GitHub profile</li>
              <li>Searching for remote job opportunities</li>
              <li>Interview preparation guidelines</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
