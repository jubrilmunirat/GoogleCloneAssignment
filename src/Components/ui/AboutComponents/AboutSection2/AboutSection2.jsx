import "./AboutSection2.css"
import Button from "../../../reusable/Buttons/Button"
const AboutSection2 = () => {
    return (
        <div className="Section2Container">
            <div className="Section2Text">
                <h1>
                    Gemini app is now available for Windows
                </h1>
                <p>
                    Get help from AI with a simple keyboard shortcut, directly from your desktop.
                </p>
                <div className="btn">
                    <Button name="Check it out" />
                </div>

            </div>
            <div className="Section2Image">
                <img src="./src/assets/images/AboutPage/imsge7.png" />
            </div>
        </div>
    )
}
export default AboutSection2