import Button from "../Buttons/Button"
import "./SlideCard.css"
const SlideCard = ({ SlideImage, SlideText1, SlideText2 }) => {
    return (
        <div className="SlideContainer">
            <div className="ContainerChild">
                <div className="SlideText">
                    <h1>
                        {SlideText1}
                    </h1>
                    <h4>
                        {SlideText2}
                    </h4>
                    <Button name="Take a look" />
                </div>
                <div className="Sliceimage">
                    <img src={SlideImage} />
                </div>
            </div>
        </div>
    )
}
export default SlideCard