import Hero from "./(public)/ui/Hero";
import AboutVision from "./(public)/ui/AboutVision";
import CourseSummary from "./(public)/ui/CourseSummary";
import Achievement from "./(public)/ui/Achivement";
import HowToApply from "./(public)/ui/Apply";
export default function Home() {
  return (
    <>
      <Hero />
      <CourseSummary />
      <HowToApply />
    </>
  );
}
