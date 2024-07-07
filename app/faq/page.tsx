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
          <AccordionTrigger>Duration of courese</AccordionTrigger>
          <AccordionContent>
            It&#39; a 9-month course. We will do our best to complete the course
            within this time frame, but it can be extended by 2 more months if
            needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How can I prepare for a full-stack web development bootcamp?
          </AccordionTrigger>
          <AccordionContent>
            Before starting a bootcamp, it&#39; helpful to review basic
            programming concepts and familiarize yourself with HTML, CSS, and
            JavaScript. Completing any pre-course work provided by the bootcamp
            can also help you hit the ground running once the program begins.
            Additionally, maintaining a growth mindset, staying organized, and
            being prepared to work hard are essential for success in a bootcamp
            environment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How much does a full-stack web development bootcamp cost?
          </AccordionTrigger>
          <AccordionContent>
            The bootcamp tuition cost is <strong>R2500</strong> for live class
            with recording and <strong>R1500</strong> for class recording.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Any Success Rule</AccordionTrigger>
          <AccordionContent>
            Set Clear Goals, No matter what happens you will not divert from
            your goal for 1 year. No more priority to Entertainment.you have to
            change you mindset which will help you to change your believe system
            and u will enjoy coding.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How to achive the goal of becoming fullstack web developer after
            completion of bootcamp ?
          </AccordionTrigger>
          <AccordionContent>
            Solidify fundamentals in HTML, CSS, and JavaScript. Dedicate time to
            practice coding, focusing on data structures, regularly. Make sure
            to complete the daily classwork. Repeat the videos, understand each
            concept, and practice a minimum of six times. If you dedicate 2 to 3
            hours of work daily for nine months, becoming proficient in
            full-stack development is achievable. Stay persistent, keep
            learning, and be patient with yourself as you progress toward your
            goal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
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
