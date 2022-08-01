import "./App.css";
import svgIcons from "./UI/SvgIcons";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import HardSkills from "./components/HardSkills";
import Footer from "./components/Footer";

function App() {
  return (
    <main className={"mainBody"}>
      <Header />
      {/* <nav className={"navContainer"}>BOI</nav> */}
      <AboutMe />
      <HardSkills icons={svgIcons} />
      <Footer />
    </main>
  );
}

export default App;
