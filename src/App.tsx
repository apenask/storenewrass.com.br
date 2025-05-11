import { BanknoteIcon as BanknotesIcon } from 'lucide-react';
import Hero from './components/Hero';
import RedLine from './components/RedLine';
import Categories from './components/Categories';
import Networking from './components/Networking';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDuration: `${Math.random() * 15 + 5}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <BanknotesIcon size={24} className="money" />
          </div>
        ))}
      </div>
      <Hero />
      <RedLine />
      <Categories />
      <Networking />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;