import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(79,100,229,0.3),rgba(255,255,255,0))]"></div>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
