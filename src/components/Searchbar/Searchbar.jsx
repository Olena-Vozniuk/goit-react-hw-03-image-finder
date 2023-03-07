import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types';
import {
    SearchbarHeader,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput
} from './Searchbar.styled'

export const Searchbar = ({ onSubmit  }) => {

    return (
        <SearchbarHeader>
        <Formik
                initialValues={{
                    values: '',
                }}
                onSubmit={(values, actions) => {
                    if (!values.values.trim()) {
                        return toast.error('Please, enter request');
                    }
                    
                    
                    onSubmit(values.values)
                        actions.resetForm();
                }}

        >
            <SearchForm>
                <SearchFormButton type="submit">
                        <SearchFormButtonLabel>
                            <FaSearch/>
                        </SearchFormButtonLabel>
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
