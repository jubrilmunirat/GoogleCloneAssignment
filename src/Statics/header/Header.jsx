import "./Header.css";
import hamburger from "../../assets/images/AboutPage/image9.png"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className="headerContainer">
                <div className="hambuger">
                    <img src={hamburger} alt="menu" />
                </div>

                <section className="Logo">
                    <img src="./google-logo-about.svg" alt="Logo" />
                </section>

                <section className="navigation">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div>
                            <nav>About </nav>
                            <div className="rule" />


                        </div>
                    </Link>
                    <Link to="/Products" style={{ textDecoration: "none" }}>
                        <nav >Product</nav>
                    </Link>
                    <Link to="/CompanyInfo" style={{ textDecoration: "none" }}>

                        <nav>Company Info</nav>
                    </Link>
                    <nav>News</nav>

                </section>

            </div>


        </div>
    );
}
export default Header;