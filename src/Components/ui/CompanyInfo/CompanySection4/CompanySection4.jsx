import "./CompanySection4.css"
import CompanyCards from "../../../reusable/cards/Cards";
import myCardImage1 from "../../../../../src/assets/images/CompanyPage/image9.png";
import myCardImage2 from "../../../../../src/assets/images/CompanyPage/developer.png";
import myCardImage3 from "../../../../../src/assets/images/CompanyPage/image11.png";
import Icon from "../../../../assets/images/AboutPage/image10.png";

const CompanySection4 = () => {
    return (
        <div className="CompanySetion1">
            <CompanyCards
                cardImage={myCardImage1}
                cardText="Google Labs"
                CardIcon={Icon}
            />
            <CompanyCards
                cardImage={myCardImage2}
                cardText="Google for Developers "
                CardIcon={Icon}
            />
            <CompanyCards
                cardImage={myCardImage3}
                cardText="Google Cloud"
                CardIcon={Icon}
            />
        </div>
    );
};

export default CompanySection4;