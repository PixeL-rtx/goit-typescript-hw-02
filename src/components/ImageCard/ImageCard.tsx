import { PhotoUrl } from "../../types/interfaces";
import css from "./ImageCard.module.css";
interface ImageCard {
  alt_description: string;
  urls: PhotoUrl;
  updateModalState: (url: string, alt: string) => void;
}

const ImageCard: React.FC<ImageCard> = ({
  alt_description,
  urls,
  updateModalState,
}) => {
  return (
    <div
      className={css.cardWrapper}
      onClick={() => updateModalState(urls.regular, alt_description)}
    >
      <img
        className={css.cardImage}
        src={urls.small}
        alt={alt_description || "No description"}
      />
    </div>
  );
};

export default ImageCard;
