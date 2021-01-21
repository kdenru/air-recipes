import * as React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "./styles.styl";

interface Props {
  images: string[];
}

const Slider: React.FunctionComponent<Props> = ({ images }: Props) => {
  const convertedImages = images.map((image: string) => ({
    original: image,
    thumbnail: image,
    originalClass: "imageContainer",
  }));

  return (
    <ImageGallery
      autoPlay
      showNav={false}
      showPlayButton={false}
      items={convertedImages}
      showFullscreenButton={false}
      showThumbnails={convertedImages.length > 1}
    />
  );
};

export default Slider;
