import { Link } from "react-router-dom";

export default function ContactList(props) {
  const renderContacts = () => {
    if (!props.contacts) {
      return null;
    }

    return props.contacts.map((contact, index) => {
      return (
        <li key={index}>
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/contacts/${contact.id}`}
          >
            {contact.first_name} {contact.last_name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{renderContacts()}</ul>
    </div>
  );
}
