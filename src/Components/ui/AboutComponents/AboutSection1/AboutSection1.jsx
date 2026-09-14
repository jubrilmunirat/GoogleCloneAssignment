import "./AboutSection1.css"
import Cards from "../../../reusable/cards/Cards";
import myCardImage1 from "../../../../../src/assets/images/AboutPage/image2.png";
import myCardImage2 from "../../../../../src/assets/images/AboutPage/image3.webp";
import myCardImage3 from "../../../../../src/assets/images/AboutPage/image4.png";
import Icon from "../../../../assets/images/AboutPage/image10.png";

const AboutSection1 = () => {
    return (
        <div className="AboutSetion1">
            <Cards
                cardImage={myCardImage1}
                cardText="Explore our products and features across Search, Google Workspace, and more"
                CardIcon={Icon}
            />
            <Cards
                cardImage={myCardImage2}
                cardText="Learn about our leading AI models -- and discover their capabilities "
                CardIcon={Icon}
            />
            <Cards
                cardImage={myCardImage3}
                cardText="See how we're tackling some of the most challenging problems in computer science"
                CardIcon={Icon}
            />
        </div>
    );
};

export default AboutSection1;