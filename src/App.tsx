import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Experience />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
