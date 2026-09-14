import "./ProductSection9.css"
import GoogleCard from "../../../reusable/GoogleCard/GoogleCard"
import MyGImage1 from "../../../../assets/images/ProductPage/logo9.png"
import MyGIcon1 from "../../../../assets/images/AboutPage/image10.png"
import MyGImage2 from "../../../../assets/images/ProductPage/logo12.png"
import MyGImage3 from "../../../../assets/images/ProductPage/logo13.png"
import MyGImage4 from "../../../../assets/images/ProductPage/logo14.png"
import MyGImage5 from "../../../../assets/images/ProductPage/logo15.png"
import MyGImage6 from "../../../../assets/images/ProductPage/logo16.png"
import MyGImage7 from "../../../../assets/images/ProductPage/logo17.png"
import MyGImage8 from "../../../../assets/images/ProductPage/logo18.png"
import MyGImage9 from "../../../../assets/images/ProductPage/logo19.png"
import MyGImage10 from "../../../../assets/images/ProductPage/logo20.png"
import MyGImage11 from "../../../../assets/images/ProductPage/logo21.png"
import MyGImage12 from "../../../../assets/images/ProductPage/flutter.png"
const ProductSection9 = () => {
    return (

        <div className="ParentGoogleContainer">
            <div className="GoogleText">
                <div className="GoogleText1">
                    <h1>Google products</h1>
                </div>
                <div className="GoogleText2">
                    <h2> Filter By
                        <input type="text" placeholder="Features" /></h2>
                </div>
            </div>
            <div className="GoogleIconImage">
                <GoogleCard

                    GoogeImage={MyGImage1}
                    GoogleText="Gemini"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage2}
                    GoogleText="YouTube Music"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage3}
                    GoogleText="YouTube TV"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage4}
                    GoogleText="Blogger"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage5}
                    GoogleText=" Business profile"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage6}
                    GoogleText="Google Ads"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage7}
                    GoogleText="Google Admob"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage8}
                    GoogleText="Google Adsense"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage9}
                    GoogleText="Google Ad manager"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage10}
                    GoogleText="Goggle analytics"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage11}
                    GoogleText="Goggle Cloud"
                    GoogleIcon={MyGIcon1} />
                <GoogleCard

                    GoogeImage={MyGImage12}
                    GoogleText="Flutter"
                    GoogleIcon={MyGIcon1} />

            </div>
            <div className="Text3">
                <div className="GIcon">
                    <img src="./src/assets/images/ProductPage/logo35.png" />
                </div>
                <h4>Products shown on this page are not available in all countries. Visit support.google.com for more information on specific product availability.</h4>
            </div>
        </div>
    )
}
export default ProductSection9