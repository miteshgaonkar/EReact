import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/screen/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./components/screen/ProductScreen";
import CartScreen from "./components/screen/CartScreen";

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Routes>
        {/* <Route path="/" Component={HomeScreen} exact /> */}
        {/* <HomeScreen></HomeScreen> */}
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/product/:id" element={<ProductScreen/>} exact />
          <Route path="/cart/:id?" element={<CartScreen/>} exact />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
