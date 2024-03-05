import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/screen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">

    // </div>
    <Router>
      <Header/>
      <main className="py-3">
        {/* <Route path="/" Component={HomeScreen} exact /> */}
        <HomeScreen></HomeScreen>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
