import contactAPI from "../api/contactAPI";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteContactPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const deleteContact = async () => {
    const data = await contactAPI.deleteContact(params.contactID);
    if (data) {
      navigate(`/contacts/`);
    }
  };

  return (
    <div>
      Are you sure you want to delete this contact?
      <button onClick={deleteContact}>Yes</button>
      <button>No</button>
    </div>
  );
}
