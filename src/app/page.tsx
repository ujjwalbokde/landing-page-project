import { About } from "@/components/About";
import { ContactUs } from "@/components/Contact";
import Features from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Features/>
    <Services/>
    <Testimonials/>
    <ContactUs/>
    </>
  );
}
