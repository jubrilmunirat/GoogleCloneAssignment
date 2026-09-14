import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Header from "./Statics/header/Header";
import Products from "./Pages/Products/Products";
import CompanyInfo from "./Pages/CompanyInfo/CompanyInfo";
import Footer from "./Statics/footer/Footer";


const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/companyInfo" element={<CompanyInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>






    </div>

  );
}
export default App;