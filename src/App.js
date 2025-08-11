import logo from './logo.svg';
import './App.css';
import NavbarCustom from './components/NavbarCustom';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicePage from './components/ServicePage';
import CaseSignalPage from './components/CaseSignalPage';
import NeuralLab from './components/NeuralLab';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <div className="App">
     <NavbarCustom />
     <HomePage />
     <ServicePage />
     <CaseSignalPage />
     <NeuralLab />
     <ContactPage />
     <Footer />
    </div>
  );
}

export default App;
