import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Blog from "@/components/Blog";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <CurrentlyBuilding />
      <Blog />
      <About />
    </main>
  );
}