import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import CaseStudy from './components/case/CaseStudy';
import Clients from './components/clients/Clients';
import Design from './components/designs/Design';
import Footer from './components/footer/Footer';
import Hero from './components/hero/hero';
import Interiors from './components/interior/Interiors';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Design />
      <Interiors />
      <CaseStudy />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
