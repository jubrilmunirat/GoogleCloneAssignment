import Button from "../../../reusable/Buttons/Button"
import "./ProductSectio7.css"
const ProductSection7 = () => {
    return (
        <div className="ProductSection7">
            <div className="Section7Text">
                <img src="./src/assets/images/ProductPage/logo11.png" />
                <h1> Try new AI products and experiments</h1>
            </div>
            <div className="Section7Image">
                <div className="Section7Image1">
                    <img src="./src/assets/images/ProductPage/logo47.png" />
                    <div className="section7text2">
                        <h1>FLOW</h1>
                        <h2>create cinematic clips, scenes and stories with our AI filmaking tools</h2>
                        <Button name="Check it out ↗" />
                    </div>
                </div>
                <div className="image3">
                    <img src="./src/assets/images/ProductPage/logo39.png" />
                </div>
            </div>

        </div>
    )
}
export default ProductSection7