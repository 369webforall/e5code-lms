import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="max-w-6xl mx-auto mt-4">
      <h2 className="text-2xl font-semibold">FAQ</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What language is the bootcamp taught in?
          </AccordionTrigger>
          <AccordionContent>
            The bootcamp is taught in English. All the documentation are in
            English, so all students must have a good level and understanding of
            written English.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can I join the Web Development course without a technical
            background?
          </AccordionTrigger>
          <AccordionContent>
            You don&#39;t need any technical background to join our Web
            Development course. We expect three things from our students: be
            extremely motivated, be curious, and be social. If this sounds like
            you, we&#39;ll be more than happy to have you on board. You must
            have basic computer knowledge.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Duration of courese</AccordionTrigger>
          <AccordionContent>
            It&#39; a 9-month course. We will do our best to complete the course
            within this time frame, but it can be extended by 2 more months if
            needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How can I prepare for a full-stack web development bootcamp?
          </AccordionTrigger>
          <AccordionContent>
            Before starting a bootcamp, it&#39; helpful to review basic
            programming concepts and familiarize yourself with HTML, CSS, and
            JavaScript. Additionally, maintaining a growth mindset, staying
            organized, and being prepared to work hard are essential for success
            in a bootcamp environment. My advise is to work daily at list 3 to 4
            hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How much does a full-stack web development course cost for Full
            Access (Live Class + Recordings)?
          </AccordionTrigger>
          <AccordionContent>
            The Full Access tuition fee is <strong>R2500</strong>, which
            includes live classes and recordings. The recordings will be
            available online one hour after each class.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            How much does a full-stack web development course cost for
            pre-recorded lectures Access ?
          </AccordionTrigger>
          <AccordionContent>
            The pre-recorded lectures Access cost <strong>R1500</strong>, which
            includes all our live lectures recordings.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            Is there any extra support for students who subscribe to
            pre-recorded lectures?
          </AccordionTrigger>
          <AccordionContent>
            We will have a weekly 1-hour class that students can join to ask
            questions or get clarification or revision on common questions asked
            through email. This class will be also recorded. Mostly this class
            will be on saturday or sunday. students can ask questions on classes
            completed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Any Success Rule</AccordionTrigger>
          <AccordionContent>
            Set Clear Goals, No matter what happens you will not divert from
            your goal for 1 year. No more priority to Entertainment.you have to
            change you mindset which will help you to change your believe system
            and u will enjoy coding.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            How to achive the goal of becoming fullstack web developer after
            completion of bootcamp ?
          </AccordionTrigger>
          <AccordionContent>
            Solidify fundamentals in HTML, CSS, and JavaScript. Dedicate time to
            practice coding, focusing on data structures, regularly. Make sure
            to complete the daily classwork. Repeat the recorded lectures,
            understand each concept, and practice a minimum of six times. If you
            dedicate 2 to 3 hours of work daily for nine months, becoming
            proficient in full-stack development is achievable. Stay persistent,
            keep learning, and be patient with yourself as you progress toward
            your goal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>Course Completion Certificate</AccordionTrigger>
          <AccordionContent>
            Upon finishing the course, receive a certificate acknowledging your
            accomplishment from our institution.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
