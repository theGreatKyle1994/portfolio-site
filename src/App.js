import "./App.css";
import svgIcons from "./UI/SvgIcons";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import HardSkills from "./components/HardSkills";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className={"mainBody"}>
      <Header />
      <AboutMe />
      <HardSkills icons={svgIcons} />
      <SoftSkills />
      <Projects />
      <Footer icons={svgIcons} />
    </main>
  );
}

export default App;
