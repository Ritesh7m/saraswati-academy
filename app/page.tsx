import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Classes />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}