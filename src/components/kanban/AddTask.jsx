import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const AddTask = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState({
    company_name: "",
    position: "",
    deadline: "",
    oa_link: "",
    status: "",
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...value,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setShowModal(false);
    addNewTask(props.column.id, value);
    setValue({
      company_name: "",
      position: "",
      deadline: "",
      oa_link: "",
      status: "",
    });
  };
  const addNewTask = (columnId, content) => {};

  return (
    <>
      <div>
        <button
          onClick={() => {
            handleOpenModal();
          }}
        >
          Add Company
        </button>
        <ReactModal isOpen={showModal} contentLabel="Add Company">
          <div>
            <h1>Add Job</h1>
            <form>
              <input
                name="company_name"
                type="text"
                placeholder="Company Name"
                value={value.company_name}
                onChange={(e) => handleInputChange(e)}
              />
              <input
                name="position"
                type="text"
                placeholder="Position"
                value={value.position}
                onChange={(e) => handleInputChange(e)}
              />
              <button type="submit" onClick={handleSubmit}>
                Save Job
              </button>
            </form>
          </div>
          <button onClick={handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    </>
  );
};

export default AddTask;
