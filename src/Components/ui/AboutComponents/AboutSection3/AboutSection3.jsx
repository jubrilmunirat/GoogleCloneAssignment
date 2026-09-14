import "./AboutSection3.css"
import Button from "../../../reusable/Buttons/Button"
const AboutSection3 = () => {
    return (
        <div className="Section3Container">
            <div className="SectionLogo">
                <img src="./src/assets/images/Aboutpage/image5.png" />
            </div>
            <div className="SectionText">
                <h1> Google around the globe </h1>
                <h3> Learn about Google's work and impact around the world.
                    Explore</h3>
                <Button name="Explore" />
            </div>

        </div>
    )
}
export default AboutSection3