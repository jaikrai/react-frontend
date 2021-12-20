import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeraderComponent from "./components/HeraderComponent";
import ListEmpolyeeComponent from "./components/ListEmpolyeeComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeraderComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<ListEmpolyeeComponent />}></Route>
              <Route
                path="/empolyees"
                caseSensitive={false}
                element={<ListEmpolyeeComponent />}
              ></Route>
              {/* <ListEmpolyeeComponent /> */}
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
