import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import contactAPI from "../api/contactAPI";

export default function ContactPage() {
  const [contact, setContact] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getContact = async () => {
      const data = await contactAPI.fetchContactByID(params.contactID);
      if (data) {
        setContact(data);
      }
    };
    getContact();
  }, [params.contactID]);

  const renderContact = () => {
    if (!contact) {
      return null;
    }
    return (
      <main style={{ padding: "1rem" }}>
        <h2>
          {contact.first_name} {contact.last_name}
        </h2>
        <p>Street: {contact.street}</p>
        <p>City: {contact.city}</p>
        <p>State: {contact.state}</p>
        <p>Zipcode: {contact.zipcode}</p>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <p>Notes: {contact.notes}</p>
      </main>
    );
  };
  return <div>{renderContact()}</div>;
}
