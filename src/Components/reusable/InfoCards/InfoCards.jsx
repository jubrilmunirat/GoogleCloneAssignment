import "./InfoCard.css"

const InfoCards = ({ InfoText, InfoImage, InfoIcon }) => {
    return (
        <div className="InfoParent">
            <div className="InfoParent">

                <p> {InfoText}</p>

                <div className="Infoimage1">
                    <img src={InfoImage} />

                </div>
                <img src={InfoIcon} />

            </div>
        </div >
    )
}
export default InfoCards