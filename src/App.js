//import logo from './logo.svg';
import './App.css';
//import Hero from './components2/hero/hero.component';
import Features from './sections/Features/features.section';
import Footer from './sections/Footer/footer.section';
import Hero from './sections/Hero/hero.component';
import Nav from './sections/Navigation/Nav.component';

function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <Nav/>
      <Hero/>
      <Features />
      <Footer />
    </div>
  );
}

export default App;