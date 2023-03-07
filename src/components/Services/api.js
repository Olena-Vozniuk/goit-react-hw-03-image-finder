import PropTypes from 'prop-types';

const KEY = '32873101-26554fb46a442edcfb4427fc4';
const BASE_URL = 'https://pixabay.com/api/';


export const getImages = (values, page) => {
  return fetch(`${BASE_URL}?q=${values}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
};

getImages.propTypes = {
    values: PropTypes.string.isRequired,
};

