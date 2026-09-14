
import "./AboutSection4.css"
import Button from "../../../reusable/Buttons/Button";
const AboutSection4 = () => {
    return (
        <div className="Section4Container">
            <div className="Section4">
                <div className="Section4Text">
                    <h1> Get the latest news from Google in your inbox
                    </h1>
                    <h3>Sign up to receive top stories from the week — from product announcements, to everyday tips. </h3>
                </div>
                <div className="Section4btn">
                    <Button name="subscribe" />
                </div>

            </div>

        </div>
    )
}
export default AboutSection4;