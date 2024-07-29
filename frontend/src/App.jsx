import Header from "./component/Header";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductScreen from "./pages/ProductScreen";
import CartPage from "./pages/CartPage";
import ShippingPage from "./pages/ShippingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <div className="px-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id?" element={<CartPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
