import NavBar from './NavBar';
import Header from './Header';
import HowItWorks from './HowItWorks';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

function HomePage() {
    return (
        <div className="App">
            <NavBar />
            <Header />
            <HowItWorks />
            <AboutUs />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;
