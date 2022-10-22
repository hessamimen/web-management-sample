import About from "./components/About";
import AllinOne from "./components/AllinOne";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About/>
      <Support/>
      <AllinOne/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
