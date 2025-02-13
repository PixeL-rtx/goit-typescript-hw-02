import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
  isActive: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  handleLoadMore,
  isActive,
}) => {
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
