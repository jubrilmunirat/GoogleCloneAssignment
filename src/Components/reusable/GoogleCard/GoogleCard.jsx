import "./GoogleCard.css"
const GoogleCard = ({ GoogeImage, GoogleText, GoogleIcon }) => {
    return (


        <div className="GoogleParent">
            <div className="Googleimage1">
                <div className="GImage1">
                    <img src={GoogeImage} />
                </div>

                <p> {GoogleText}</p>
                <div className="GImage2">
                    <img src={GoogleIcon} />
                </div>
            </div>


        </div>

    )
}
export default GoogleCard