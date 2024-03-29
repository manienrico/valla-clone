//import logo from './logo.svg';
import './App.css';
import Text from './components/text/text.component';
//import Hero from './components2/hero/hero.component';
import Features from './sections/Features/features.section';
import Footer from './sections/Footer/footer.section';
import Hero from './sections/Hero/hero.component';
import Nav from './sections/Navigation/Nav.component';
import Partners from './sections/Partners/Partners';

function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <Nav/>
      <Hero/>
      <Partners />
      <Features />
      <Footer />
    </div>
  );
}

export default App;