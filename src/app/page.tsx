import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Movies from "@/sections/Movies";
import Navbar from "@/sections/Navbar";

export default function HomePage() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <Movies />
      <Footer />
    </main>
  );
}
