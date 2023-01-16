import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Action from './components/Action';
import Features from './components/Features';
import Appointment from './components/Appointment';
import Services from './components/Services';
import About from './components/About';
import Carousel from './components/Carousel';
import Header from './components/Header';

function App() {
  return (
    <>
      {/* Header Start */}
      <Header/>
      {/* Header End */}

      {/* Carousel Start */}
      <Carousel/>
      {/* Carousel End */}

      {/* About Start */}
      <About/>
      {/* About End */}

      {/* Services Start */}
      <Services/>
      {/* Services End */}

      {/* Appointment Start */}
      <Appointment/>
      {/* Appointment End */}

      {/* Features Start */}
      <Features/>
      {/* Features End */}

      {/* Action Start */}
      <Action/>
      {/* Action End */}

      {/* Team Start */}
      <Team/>
      {/* Team End */}

      {/* Testimonial Start */}
      <Testimonial/>
      {/* Testimonial End */}

      {/* Footer Start */}
      <Footer/>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-primary px-3 back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}

export default App;
