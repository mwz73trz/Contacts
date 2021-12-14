import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import contactAPI from "../api/contactAPI";

export default function AddContactPage() {
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const contactData = {
      first_name: event.target.elements[0].value,
      last_name: event.target.elements[1].value,
      street: event.target.elements[2].value,
      city: event.target.elements[3].value,
      state: event.target.elements[4].value,
      zipcode: event.target.elements[5].value,
      phone: event.target.elements[6].value,
      email: event.target.elements[7].value,
      notes: event.target.elements[8].value,
    };
    const data = await contactAPI.addContact(contactData);
    if (data) {
      navigate(`/contacts/${data.id}`);
    }
  };
  return (
    <div>
      <h2>Add Contact Page</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control name="first_name" placeholder="First Name" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="last_name" placeholder="Last Name" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Street</Form.Label>
          <Form.Control name="street" placeholder="Street" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control name="city" placeholder="City" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control name="state" placeholder="State" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Zipcode</Form.Label>
          <Form.Control name="zipcode" placeholder="Zipcode" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control name="phone" placeholder="Phone" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" placeholder="Email" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control name="notes" placeholder="Notes" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Add Contact
        </Button>
      </Form>
    </div>
  );
}
