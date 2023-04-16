import { Component } from "react";
import { Overlay, ModalViewer } from "./Modal.styled";
import PropTypes from 'prop-types';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.closeModalByEsc)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModalByEsc)
    }
   
    closeModalByEsc = e => {
        this.props.closeModal(e);
    }

    render() {
        const {closeModal, tags, modalImg} = this.props;
        return (
            <Overlay onClick={ closeModal }>
                <ModalViewer>
                    <img src={ modalImg } alt={ tags } />
                </ModalViewer>
            </Overlay>
        );
    }
}

Modal.propTypes = {
    modalImg: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    tags: PropTypes.string.isRequired,
  };