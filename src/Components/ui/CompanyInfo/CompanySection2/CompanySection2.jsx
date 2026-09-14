import "./CompanySection2.css"
const CompanySection2 = () => {
    return (
        <div className="CompanySection2Container">
            <div className="CompanyText1">
                <h1> Research and technology </h1>
                <h3> Our teams are working to solve complex challenges, advance the field of AI and help as many people as possible</h3>
            </div>
            <div className="ContainerSection">
                <div className="Section2Container1">
                    <div className="Section2Container1-1">
                        <img src="./src/assets/images/CompanyPage/image52.png" />
                        <h2>
                            Google DeepMind
                        </h2>
                        <div className="CompanyIcon">
                            <img src="./src/assets/images/AboutPage/image10.png" />
                        </div>
                    </div>
                </div>
                <div className="Section2Container2">
                    <div className="Section2Container2-1">
                        <img src="./src/assets/images/CompanyPage/image56.png" />
                        <h2>
                            Google Research
                        </h2>
                        <div className="CompanyIcon1">
                            <img src="./src/assets/images/AboutPage/image10.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CompanySection2