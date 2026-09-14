
import "./CompanySection1.css";

const CompanySection1 = () => {
    return (
        <div className="CompanySection1">
            <div className="CompanyImage">
                <img src="./src/assets/images/CompanyPage/image30.png" alt="Company" />
            </div>
            <h1>
                Our mission is to  <span style={{ color: "#4285F4" }}> organize</span>  the world’s <span style={{ color: "#EC5144" }}>information </span> and make it <span style={{ color: "#34A853" }}>universally accessible </span>and <span style={{ color: "#E37400" }}>useful</span>
            </h1>
        </div>
    );
}

export default CompanySection1;