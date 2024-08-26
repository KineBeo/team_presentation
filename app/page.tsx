import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SericeTab from "@/components/ServiceTab";
import BlogTab from "@/components/BlogTab";
import TopicTab from "@/components/TopicTab";
import DetailTab from "@/components/DetailTab";
import SupportTab from "@/components/SupportTab";
import ContactTab from "@/components/ContactTab";
import Footer from "@/components/Footer";
import FooterAccordion from "@/components/FooterAccordion";
export default function Home() {
  return (
      <>
        <NavBar/>
        <HeroSection/>
        <SericeTab/>
        <BlogTab/>
        <TopicTab/>
        <DetailTab/>
        <SupportTab/>
        <ContactTab/>
        <Footer/>
        {/* Presentation
        Service 
        Blog 
        Topic 
        Contact
        Footer  */}
      </>
  );
}
