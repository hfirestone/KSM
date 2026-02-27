import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Marketing from "@/components/Marketing";
import Financial from "@/components/Financial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Testimonials />
      <Marketing />
      <Financial />
      <Contact />
      <Footer />
    </main>
  );
}
