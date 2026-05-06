import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Verticals from "@/components/Verticals";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Verticals />
      <Products />
      <CTA />
      <Footer />
    </>
  );
}
