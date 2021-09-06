import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Catalog from "./components/catalog";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="conatiner-fluid">
        <Catalog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
