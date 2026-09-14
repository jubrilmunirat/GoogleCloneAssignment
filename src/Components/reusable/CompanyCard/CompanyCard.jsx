import "./Cards.css";
const CompanyCard = ({ CompanyImage, CompanyText, CompanyIcon }) => {
    return (

        <div className="Company-section1">
            <div className="CompanySection">
                <div className="CompanyImage">
                    <img src={CompanyImage} />
                </div>
                <div className="CompanySectionText">
                    <p> {CompanyText}</p>
                </div>
                <div className="CompanySectionIcon">
                    <img src={CompanyIcon} />
                </div>
            </div>

        </div>


    );
}
export default CompanyCard 