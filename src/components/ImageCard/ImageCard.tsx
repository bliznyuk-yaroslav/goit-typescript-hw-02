import React from "react";
import css from "./ImageCard.module.css";
import { Image as ImageItem } from "../App/App.types";

interface ImageCardProps {
  item: ImageItem;
  openModal: (item: ImageItem) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
  return (
    <div className={css.elements}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={css.photo}
        onClick={() => openModal(item)}
      />
    </div>
  );
};
export default ImageCard;
