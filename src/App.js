import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeraderComponent from "./components/HeraderComponent";
import ListEmpolyeeComponent from "./components/ListEmpolyeeComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
    <div>
      <HeraderComponent />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<ListEmpolyeeComponent />}></Route>
            <Route path="employees" element={<ListEmpolyeeComponent />}></Route>
            <Route
              path="add-empolyee"
              element={<CreateEmployeeComponent />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
