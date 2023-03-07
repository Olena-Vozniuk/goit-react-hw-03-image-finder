import { Component } from "react";
import PropTypes from 'prop-types';
import { getImages } from "components/Services/api";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";

export class ImageGallery extends Component {
    state = {
        images: [],
        loading: false,
        error: '',
        page: 1,
        showModal: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value ||
            prevState.page !== this.state.page) {
            this.setState({ loading: true })
            
            getImages(this.props.value.trim(), this.state.page)
                .then(response => response.json())
                .then(images => {
                    if (images.totalHits === 0) {
                        return Promise.reject(
                            new Error('Something went wrong'))
                    }
                    console.log('images >>>', images);
                    this.setState({
                        images: [...this.state.images, ...images.hits]     
                    })
                }).catch(error => {
                    console.log(error);
                    this.setState({ error })
                }).finally(() => {
                    this.setState({ loading: false })
                })
        }
    }

    handleLoad = () => {
        this.setState((prev) => ({ page: prev.page + 1 }))
    }

    toggleModal = () =>
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    

    render() {
        const { error, loading, images, showModal } = this.state;
        const { tags, largeImageURL } = this.props;

        return (
            <> {error && <p>No results</p>}
                {loading && <Loader />}
                {images[0] &&
                    <>
                    <ul className="gallery">
                        <ImageGalleryItem images={images} onClick={this.toggleModal}/>
                    </ul> 
                    <Button onClick={this.handleLoad} />
            </>        
                }
                {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
            </>
        )
    }
};

ImageGallery.propTypes = {
    value: PropTypes.string.isRequired,
};