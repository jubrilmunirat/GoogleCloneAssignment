import "./ProCard.css"

const ProCard = ({ ProText, ProImage, ProIcon }) => {
    return (
        <div className="ProductParent">
            <div className="ProParent">

                <p> {ProText}</p>

                <div className="Proimage1">
                    <img src={ProImage} />

                </div>
                <img src={ProIcon} />

            </div>
        </div >
    )
}
export default ProCard