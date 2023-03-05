import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = (values) => {
    console.log('Значення інпуту:', values);
    onSubmit(values)
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
