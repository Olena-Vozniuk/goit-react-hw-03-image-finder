import PropTypes from 'prop-types';

export const ImageGalleryItem = ({images}) => {
    return (
        images.map(el => {
            return (<li className="gallery-item" key={el.id}>
                <img src={el.webformatURL} alt={el.tags} width="300"/>
            </li>)
        })
    
)
}

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  })).isRequired,
};