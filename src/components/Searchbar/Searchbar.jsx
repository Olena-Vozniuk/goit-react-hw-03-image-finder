import { Formik, Form, Field } from 'formik';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = (values) => {
        if (!values.values.trim()) {
            return toast.error('Please, enter request');
        }
    onSubmit(values.values)
}
    return (
        <Formik
            initialValues={{
                values: '',
            }}
            onSubmit={handleSubmit}
        >
            <Form>
                <button type="submit">
                    <span className='button-label'>Search</span>
                </button>
                <Field className="input"
                    name="values"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos">
                </Field>
            </Form>
        </Formik>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
