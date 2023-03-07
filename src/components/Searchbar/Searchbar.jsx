import { Formik } from 'formik';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
    SearchbarHeader,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput
} from './Searchbar.styled'

export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = (values) => {
        if (!values.values.trim()) {
            return toast.error('Please, enter request');
        }
        onSubmit(values.values);  
    }
    
    return (
        <SearchbarHeader>
        <Formik
            initialValues={{
                values: '',
            }}
            onSubmit={handleSubmit}

        >
            <SearchForm>
                <SearchFormButton type="submit">
                    <SearchFormButtonLabel></SearchFormButtonLabel>
                </SearchFormButton>
                <SearchFormInput className="input"
                    name="values"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos">
                </SearchFormInput>
            </SearchForm>
            </Formik>
        </SearchbarHeader>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
