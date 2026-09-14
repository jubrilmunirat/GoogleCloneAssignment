import "./Cards.css";
const Cards = ({ cardImage, cardText, CardIcon }) => {
    return (

        <div className="About-section1">
            <div className="Section">
                <div className="SectionImage">
                    <img src={cardImage} />
                </div>
                <div className="SectionText">
                    <p> {cardText}</p>
                </div>
                <div className="SectionIcon">
                    <img src={CardIcon} />
                </div>
            </div>

        </div>


    );
}
export default Cards 