import ContactSection from "../../ContactSection/ContactSection";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import PersonalAccomplishments from "../PersonalAcomplishments/PersonalAcomplishments";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <Projects></Projects>
      </div>
      <div>
        <Technologies></Technologies>
      </div>
      <div>
        <AboutMe></AboutMe>
      </div>
      <div>
        <PersonalAccomplishments></PersonalAccomplishments>
      </div>
      <div>
        <ContactSection></ContactSection>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
