import "./About.css";
import AboutHero from "../../Components/ui/AboutComponents/AboutHero/AboutHero";
import AboutSection1 from "../../Components/ui/AboutComponents/AboutSection1/AboutSection1";
import AboutSection2 from "../../Components/ui/AboutComponents/AboutSection2/AboutSection2";
import AboutSection3 from "../../Components/ui/AboutComponents/AboutSection3/AboutSection3";
import AboutSection4 from "../../Components/ui/AboutComponents/AboutSection4/AboutSection4";
const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutSection1 />
            <AboutSection2 />
            <AboutSection3 />
            <AboutSection4 />

        </div>
    )
}
export default About;