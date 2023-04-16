import React from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Container } from "./ImageGallery.styled";

export const ImageGallery = ({ images }) => {
        return (
            <Container>
                {images.map(({id, ...otherProps}) => (
                <ImageGalleryItem
                key={id}
                {...otherProps}
                />
                ))}
            </Container>
        );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      })
    ),
  };