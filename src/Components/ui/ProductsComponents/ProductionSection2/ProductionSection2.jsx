import "./ProductionSection2.css"
import ProCard from "../../../reusable/ProCard/ProCard"
import MyCard1 from "../../../../assets/images/ProductPage/tablet.png"
import MyIcon1 from "../../../../assets/images/AboutPage/image10.png"
import MyCard2 from "../../../../assets/images/ProductPage/flower.png"
import MyIcon2 from "../../../../assets/images/AboutPage/image10.png"
import MyCard3 from "../../../../assets/images/ProductPage/share.png"
import MyIcon3 from "../../../../assets/images/AboutPage/image10.png"
import MyCard4 from "../../../../assets/images/ProductPage/picture.png"
import MyIcon4 from "../../../../assets/images/AboutPage/image10.png"
import Button from "../../../reusable/Buttons/Button"
const ProductionSection2 = () => {
    return (
        <div>
            <div className="ProductIconImage">
                <ProCard
                    ProText="Product support"
                    ProImage={MyCard1}
                    ProIcon={MyIcon1}
                />


                <ProCard
                    ProText="Product support"
                    ProImage={MyCard2}
                    ProIcon={MyIcon2}
                />

                <ProCard
                    ProText="Google Store"
                    ProImage={MyCard3}
                    ProIcon={MyIcon3}
                />
                <div className="ProCard4">
                    <ProCard
                        ProText="Accessibility Support"
                        ProImage={MyCard4}
                        ProIcon={MyIcon4}
                    />
                </div>

            </div>
            <div className="ProductTextContainer">
                <img src="./src/assets/images/AboutPage/image5.png" />
                <h1> Search in new ways</h1>
                <Button name="Download the Google app" />
            </div>
        </div>



    )
}
export default ProductionSection2