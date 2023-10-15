import React, { useState, useEffect } from "react";

const Problem2 = () => {
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalBOpen, setModalBOpen] = useState(false);
  const [modalCOpen, setModalCOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [usContacts, setUsContacts] = useState([]);
  const [showEvenOnly, setShowEvenOnly] = useState(false);

  const openModalA = () => {
    setModalAOpen(true);
    setModalBOpen(false);
    setModalCOpen(false);
  };

  const openModalB = () => {
    setModalAOpen(false);
    setModalBOpen(true);
    setModalCOpen(false);
  };

  const openModalC = () => {
    setModalCOpen(true);
  };

  const closeModal = () => {
    setModalAOpen(false);
    setModalBOpen(false);
    setModalCOpen(false);
  };

  const toggleEvenOnly = () => {
    setShowEvenOnly(!showEvenOnly);
  };

  useEffect(() => {
    fetch("https://contact.mediusware.com/api-doc/contacts/")
      .then((response) => response.json())
      .then((data) => setContacts(data));

    fetch(`https://contact.mediusware.com/api-doc/country-contacts/us`)
      .then((response) => response.json())
      .then((data) => setUsContacts(data));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={openModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={openModalB}
          >
            US Contacts
          </button>
        </div>
      </div>

      {/* Modal A */}
      {modalAOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal A - All Contacts</h2>
            <label>
              <input
                type="checkbox"
                checked={showEvenOnly}
                onChange={toggleEvenOnly}
              />{" "}
              Only Even
            </label>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id} onClick={openModalC}>
                  {contact.name}
                </li>
              ))}
            </ul>
            <button onClick={openModalA}>Modal Button A - All Contacts</button>
            <button onClick={openModalB}>Modal Button B - US Contacts</button>
            <button onClick={closeModal}>Modal Button C - Close</button>
          </div>
        </div>
      )}

      {/* Modal B */}
      {modalBOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal B - US Contacts</h2>
            <label>
              <input
                type="checkbox"
                checked={showEvenOnly}
                onChange={toggleEvenOnly}
              />{" "}
              Only Even
            </label>
            <ul>
              {usContacts.map((contact) => (
                <li key={contact.id} onClick={openModalC}>
                  {contact.name}
                </li>
              ))}
            </ul>
            <button onClick={openModalA}>Modal Button A - All Contacts</button>
            <button onClick={openModalB}>Modal Button B - US Contacts</button>
            <button onClick={closeModal}>Modal Button C - Close</button>
          </div>
        </div>
      )}

      {/* Modal C */}
      {modalCOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Contact Details</h2>

            <button onClick={closeModal}>Modal Button C - Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problem2;
