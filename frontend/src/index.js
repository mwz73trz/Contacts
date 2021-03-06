import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage.js";
import ContactPage from "./pages/ContactPage.js";
import AddContactPage from "./pages/AddContactPage.js";
import DeleteContactPage from "./pages/DeleteContactPage.js";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="contacts" element={<HomePage />}>
          <Route path="add" element={<AddContactPage />} />
          <Route path=":contactID" element={<ContactPage />}>
            <Route path="delete" element={<DeleteContactPage />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
