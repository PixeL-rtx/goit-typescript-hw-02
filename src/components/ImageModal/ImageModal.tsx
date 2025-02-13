import Modal from "react-modal";
import css from "./ImageModal.module.css";
import React from "react";

type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <button onClick={closeModal} className={css.modalBtn}>
        Close
      </button>
      <div>
        <img className={css.imgModal} src={src} alt={alt} />
        <p className={css.modalText}>{alt}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
