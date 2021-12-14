import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Contact App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
