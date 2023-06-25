"use client";
import Header from "../components/header/Header";
import Grades from "@/components/grades/Grades";
export default function Home() {
  return (
    <main className="bg-gray-200 flex items-center justify-center pl-4">
      <div
        className="w-full max-w-container px-[120px] py-[64px] mx-auto px-auto
       bg-white lg:rounded-lg "
      >
        <Header />
        <div className="flex-grow bg-secondary-20 h-[8px] my-[56px]"></div>
        <Grades />
      </div>
    </main>
  );
}
