import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import contactAPI from "../api/contactAPI";
import ContactList from "../components/ContactList.js";

export default function HomePage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const data = await contactAPI.fetchContacts();
      if (data) {
        setContacts(data);
      }
    };
    getContacts();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <ContactList contacts={contacts} />
        <Link to="/contacts/add/">Add Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
