"use client";
import { Hind_Siliguri } from "next/font/google";
const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "আমি কি ভিডিওগুলো ডাউনলোড করতে পারবো?",
    answer:
      "হ্যাঁ, আপনি সমস্ত ভিডিও ডাউনলোড করতে পারবেন এবং অফলাইনে দেখতে পারবেন। ডাউনলোড করার জন্য ভিডিওর নীচে ডাউনলোড বাটনে ক্লিক করুন।",
  },
  {
    question: "আমি কি মোবাইল দিয়ে জয়েন করতে পারবো?",
    answer:
      "হ্যাঁ, আপনি মোবাইল ফোন দিয়ে খুব সহজেই জয়েন করতে পারবেন। আমাদের প্ল্যাটফর্ম মোবাইল-ফ্রেন্ডলি।",
  },
  {
    question: "আমার কি ভিডিওগুলোর লাইফটাইম একসেস থাকবে?",
    answer: "হ্যাঁ, একবার কোর্সে এনরোল করলে আপনি লাইফটাইম একসেস পাবেন।",
  },
  {
    question: "লাইভ ক্লাস কোথায় হবে ?",
    answer:
      "লাইভ ক্লাস জুম প্ল্যাটফর্মে অনুষ্ঠিত হবে। ক্লাসের লিংক আপনাকে ইমেইলে পাঠানো হবে।",
  },
  {
    question: "এসাইনমেন্ট কিভাবে হবে?",
    answer:
      "প্রতি মডিউল শেষে একটি এসাইনমেন্ট থাকবে। আপনি অনলাইনে জমা দিতে পারবেন এবং ফিডব্যাক পাবেন।",
  },
  {
    question: "ওয়েব প্রো ব্যাচ কাদেরকে নেয়া হবে?",
    answer:
      "যারা ওয়েব ডেভেলপমেন্টে ক্যারিয়ার গড়তে চান এবং প্রোগ্রামিংয়ে আগ্রহী, তাদের জন্য এই ব্যাচ।",
  },
  {
    question: "দেশের বাইরে থেকে কিভাবে পেমেন্ট করবো?",
    answer:
      "আপনি পেপাল, স্ট্রাইপ বা আন্তর্জাতিক ক্রেডিট কার্ড ব্যবহার করে পেমেন্ট করতে পারবেন।",
  },
  {
    question: "লাইভ ক্লাসের রেকর্ডিং থাকবে?",
    answer:
      "হ্যাঁ, প্রতিটি লাইভ ক্লাসের রেকর্ডিং সংরক্ষণ করা হবে এবং আপনি যেকোনো সময় দেখতে পারবেন।",
  },
  {
    question: "প্রাকটিস করতে গিয়ে সমস্যায় পড়লে সাপোর্ট পাবো কোথায়?",
    answer:
      "আমাদের ডেডিকেটেড সাপোর্ট টিম আছে। আপনি সাপোর্ট সেকশনে টিকেট খুলে সহায়তা চাইতে পারবেন।",
  },
];

export default function FAQSection() {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 py-16 ${hindSiliguri.className}`}
    >
      <h2
        className={`text-3xl font-bold mb-8 text-center ${hindSiliguri.className}`}
      >
        প্রায়ই জিজ্ঞেস করা <span className="">প্রশ্ন</span>
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg px-6 py-2"
          >
            <AccordionTrigger className="text-lg font-bold hover:no-underline">
              {`${index + 1}. ${faq.question}`}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
