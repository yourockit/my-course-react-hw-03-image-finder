import { Modal } from "components/Modal/Modal";
import { Container, Image } from "./ImageGalletyItem.styled";
import React, { Component } from "react";

export class ImageGalleryItem extends Component {
state = {
    isModalOpen: false,
};

openModal = () => {
    this.setState({isModalOpen: true});
};

closeModal = (e) => {
if(e.currentTarget !== e.target && e.code !=='Escape') {
    return
}
this.setState({isModalOpen: false});
};
render() {
    const {webformatURL, tags, largeImageURL} = this.props;
    const { isModalOpen } = this.state;
    return (
        <Container>
            <Image 
            src={webformatURL} 
            alt={tags}
            width='200'
            height='100'
            onClick={this.openModal} 
            />
            {isModalOpen && (
                <Modal
                modalImg={largeImageURL}
                tags={tags}
                closeModal={this.closeModal}
                />
            )}
        </Container>
    )
};
};