import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainNavigation from "./components/navigation/MainNavigation";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <MainNavigation />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
