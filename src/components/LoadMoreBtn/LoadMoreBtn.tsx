import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtn {
  handleLoadMore: () => void;
  isActive: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtn> = ({ handleLoadMore, isActive }) => {
  return (
    <button
      className={css.loadBtn}
      onClick={handleLoadMore}
      type="button"
      disabled={isActive}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
