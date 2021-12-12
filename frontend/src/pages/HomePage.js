import { useState, useEffect } from "react";
import contactAPI from "../api/contactAPI";
import ContactList from "../components/ContactList.js";

export default function HomePage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const data = await contactAPI.fetchContacts();
      if (data) {
        setContacts(data.contacts);
      }
    };
    getContacts();
  }, []);
  return (
    <div>
      <h2>Home Page</h2>
      <hr />
      <ContactList contacts={contacts} />
    </div>
  );
}
