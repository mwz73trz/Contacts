const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (url, init) => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Bad response: ${response.status} ${response.statusText}`
      );
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchContacts = async () => {
  let url = `${BASE_URL}contacts/`;
  return await tryCatchFetch(url);
};

const fetchContactByID = async (contactID) => {
  const url = `${BASE_URL}contacts/${contactID}/`;
  return await tryCatchFetch(url);
};

const addContact = async (contactObj) => {
  const url = `${BASE_URL}contacts/`;
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactObj),
  };
  return await tryCatchFetch(url, init);
};

const myExports = {
  fetchContacts,
  fetchContactByID,
  addContact,
};

export default myExports;
