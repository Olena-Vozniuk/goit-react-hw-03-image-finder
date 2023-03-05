import { Component } from "react";
import PropTypes from 'prop-types';
import { getImages } from "components/Services/api";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    state = {
        images: null,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            getImages(this.props.value)
                .then(response => response.json())
                .then(images => {
                    this.setState({ images })
                })
        }
        console.log('Пропси в галереї:', this.props.value);
        console.log('State галереї:', this.state.images);
    }

    render() {
        return this.state.images && <ul className="gallery">
                <ImageGalleryItem images={this.state.images.hits} />
            </ul>    
    }
};

ImageGallery.propTypes = {
    value: PropTypes.string.isRequired,
};