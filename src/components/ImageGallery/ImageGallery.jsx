import { Component } from "react";
import PropTypes from 'prop-types';
import { getImages } from "components/Services/api";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { ImageGalleryList } from './ImageGallery.styled';



export class ImageGallery extends Component {
    state = {
        images: [],
        loading: false,
        error: '',
        page: 1,
        showModal: false,
    }

    componentDidUpdate(prevProps, prevState) {
        const { value } = this.props;
        const { page } = this.state;

        if (prevProps.value !== value ||
            prevState.page !== page) {
            this.setState({ loading: true })
            
            getImages(value.trim(), page)
                .then(response => response.json())
                .then(images => {
                    if (images.totalHits === 0) {
                        return Promise.reject(
                            new Error('something is wrong!'))
                    }
                    console.log('images >>>', images);
                    this.setState({
                        images: [...this.state.images, ...images.hits]     
                    })
                }).catch(error => {
                    console.log(error);
                    this.setState({ error })
                }).finally(() => {
                    this.setState({
                        loading: false})
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
        const { error, loading, images } = this.state;

        return (
            <> {error && <p>No results</p>}
                {loading && <Loader />}
                {images[0] &&
                <>
                    <ImageGalleryList className="gallery">
                        {images.map(({ id, ...otherProps }) => (
                            <ImageGalleryItem key={id} {...otherProps} />
                            ))}
                    </ImageGalleryList> 
                    <Button onClick={this.handleLoad} />
                    
                </>        
                }
            </>
        )
    }
};

ImageGallery.propTypes = {
    value: PropTypes.string.isRequired,
};