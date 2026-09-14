import Button from "../../../reusable/Buttons/Button"
import "./CompanySection5.css"

const CompanySection5 = () => {
    return (
        <div className="CompanySection5Text">
            <div className="Section5text">
                <h1> “We continue to approach the AI opportunity boldly, with a sense of excitement. We’re also making sure we do it responsibly.”</h1>
                <h2>Sundar Pichai, CEO of Google and Alphabet</h2>
                <Button name="Read more from our CEO" />
            </div>
            <div className="Section5textImage">
                <img src="./src/assets/images/CompanyPage/image32.png" />
            </div>
        </div>
    )
}
export default CompanySection5