import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SericeTab from "@/components/ServiceTab";
import BlogTab from "@/components/BlogTab";
import TopicTab from "@/components/TopicTab";
export default function Home() {
  return (
      <>
        <NavBar/>
        <HeroSection/>
        <SericeTab/>
        <BlogTab/>
        <TopicTab/>
        {/* Presentation
        Service 
        Blog 
        Topic 
        Contact
        Footer  */}
      </>
  );
}
