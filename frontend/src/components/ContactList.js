import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function ContactList(props) {
  const renderContacts = () => {
    if (!props.contacts) return null;

    return props.contacts.map((contact, index) => {
      return (
        <tr key={index}>
          <td>{contact.last_name}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{renderContacts()}</tbody>
      </Table>
    </div>
  );
}
