import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePopup({ isOpen, onClose, onClick }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onClick={onClick}
      // onSubmit={handleSubmit}
      title="Вы уверены?"
      name="confirm"
      textButton="Да"
    ></PopupWithForm>
  );
}

export default DeletePopup;
