import css from "./LoadMoreBtn.module.css";
import React from "react";

interface LoadMoreProps {
  onLoad: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreProps> = ({ onLoad }) => {
  return (
    <button className={css.btn} onClick={onLoad}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
