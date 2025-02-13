import Modal from "react-modal";
import css from "./ImageModal.module.css";

type ImageModal = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

const ImageModal: React.FC<ImageModal> = ({
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
