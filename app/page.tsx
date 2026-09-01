import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Avantages from "@/components/Avantages";
import Simulateur from "@/components/Simulateur";
import Temoignages from "@/components/Temoignages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Avantages />
        <Simulateur />
        <Temoignages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
