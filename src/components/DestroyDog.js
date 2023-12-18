// import React, { useState } from "react";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
// import { useParams, useNavigate } from "react-router-dom";

// const DestroyDog = ({ destroyDog }) => {
//   const { id } = useParams();
  // const navigate = useNavigate();

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const handleConfirmDelete = () => {
  //   destroyDog(id);
  //   navigate("/dogindex");
  //   toggleModal();
  
  // };

  // const handleSubmit = () => {
  //   toggleModal();
  // };

//   return (
//     <>
//       <button onClick={toggleModal} className="show-button">
//         Delete Profile
//       </button>
//       <Modal isOpen={isModalOpen} toggle={toggleModal} centered>
//         <ModalBody>Are you sure you want to delete the profile?</ModalBody>
//         <ModalFooter className="center-buttons">
//           <Button color="primary" onClick={handleConfirmDelete} style={{ margin: "auto" }}>
//             Yes
//           </Button>{" "}
//           <Button color="secondary" onClick={handleSubmit} style={{ margin: "auto" }}>
//             No
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </>
//   );
// };

// export default DestroyDog;
