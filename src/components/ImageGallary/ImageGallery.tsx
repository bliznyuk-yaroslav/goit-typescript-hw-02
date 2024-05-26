import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image as GalleryImage } from "../App/App.types";

interface ImageGallerydProps {
  items: GalleryImage[];
  openModal: (item: GalleryImage) => void;
}
const ImageGallery: React.FC<ImageGallerydProps> = ({ items, openModal }) => {
  return (
    <div>
      <ul className={css.cont}>
        {items.map((item) => (
          <li key={item.id} className={css.item}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ImageGallery;
