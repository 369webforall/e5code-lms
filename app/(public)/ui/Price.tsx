"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
type PricingCardProps = {
  title: string;
  yearlyPrice?: string;
  description: string;
  features: string[];
  actionLabel: string;
};

const PricingHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
);

const PricingSwitch = () => (
  <Tabs defaultValue="0" className="w-40 mx-auto">
    <TabsList className="py-6 px-2">
      <TabsTrigger value="1" className="text-base">
        Select Plan
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

const PricingCard = ({
  title,
  yearlyPrice,
  description,
  features,
  actionLabel,
}: PricingCardProps) => (
  <Card
    className={cn(
      `w-72 flex flex-col justify-between py-1 border-zinc-700 mx-auto sm:mx-0`,

      "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors"
    )}
  >
    <div>
      <CardHeader className="pb-8 pt-4">
        <div className="flex justify-between">
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
            {title}
          </CardTitle>
        </div>

        <div className="flex flex-col gap-0.5 bg-orange-200 p-2 rounded-md">
          <h3 className="text-lg font-semibold">Total Price</h3>
          <span className="flex  text-lg  font-semibold">{yearlyPrice}</span>
        </div>
        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        <Link href="/dashboard/bank">{actionLabel}</Link>
      </Button>
    </CardFooter>
  </Card>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);

export default function Price() {
  const plans = [
    {
      title: "Fullstack web development",
      yearlyPrice: "R2875.00 ",
      description: "live class + recorded video",
      features: [
        "Join live class",
        "Access to recorded video",
        "Course duration 9 months",
        "Total price includes 15% VAT",
      ],
      actionLabel: "EFT Bank Transfer",
    },
    {
      title: "Frontend web development",
      yearlyPrice: "R1725.00",
      description: "live class + recorded video",
      features: [
        "Join live class",
        "Access to recorded video",
        "Course duration 6 months",
        "Total price includes 15% VAT",
      ],
      actionLabel: "EFT Bank Transfer",
    },
    {
      title: "Fullstack web development",
      yearlyPrice: "R1725.00",
      description: "Access to recorded video only",
      features: [
        "Access to recorded video",
        "Course duration 9 months",
        "Total price includes 15% VAT",
      ],
      actionLabel: "EFT Bank Transfer",
    },
  ];
  return (
    <div className="py-8">
      <PricingHeader
        title="Pricing Plans"
        subtitle="Choose the plan that's right for you"
      />
      <PricingSwitch />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} />;
        })}
      </section>
    </div>
  );
}
