import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ContactPage from "./pages/ContactPage.js";
import AddContactPage from "./pages/AddContactPage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/contacts/" element={<HomePage />} />
          <Route exact path="/contacts/:contactID/" element={<ContactPage />} />
          <Route exact path="/contacts/add/" element={<AddContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
