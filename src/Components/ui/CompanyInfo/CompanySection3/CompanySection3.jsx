import InfoCards from "../../../reusable/InfoCards/InfoCards"
import "./CompanySection3.css"
import MyCard1 from "../../../../assets/images/CompanyPage/image1.png"
import MyIcon1 from "../../../../assets/images/AboutPage/image10.png"
import MyCard2 from "../../../../assets/images/CompanyPage/image4.png"
import MyIcon2 from "../../../../assets/images/AboutPage/image10.png"
import MyCard3 from "../../../../assets/images/CompanyPage/image5.png"
import MyIcon3 from "../../../../assets/images/AboutPage/image10.png"
import MyCard4 from "../../../../assets/images/CompanyPage/image6.png"
import MyIcon4 from "../../../../assets/images/AboutPage/image10.png"

const CompanySection3 = () => {
    return (

        <div>
            <div className="InfoIconImage">
                <InfoCards
                    InfoText="Careers"
                    InfoImage={MyCard1}
                    InfoIcon={MyIcon1}
                />


                <InfoCards
                    InfoText="Locations"
                    InfoImage={MyCard2}
                    InfoIcon={MyIcon2}
                />

                <div className="InfoCard3">
                    <InfoCards
                        InfoText="Around the globe"
                        InfoImage={MyCard3}
                        InfoIcon={MyIcon3}
                    />
                </div>
                <div className="InfoCard4">
                    <InfoCards
                        InfoText="Contact us"
                        InfoImage={MyCard4}
                        InfoIcon={MyIcon4}
                    />
                </div>

            </div>

        </div>



    )
}



export default CompanySection3