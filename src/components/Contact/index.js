import React from 'react';
import { Formik } from 'formik';
import style from './contact.module.css';




export default function Contact() {

    return <Formik
        initialValues={{
            name: '',
            email: '',
            reason: ''
        }}
        validate={values => {
            let errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9·-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Email incorrecto';
            }
            if (!values.name) {
                errors.fullname = 'Required';
            }
            if (!values.reason) {
                errors.reason = 'Required'
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 1000);

        }}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting
        }) => (
            <form onSubmit={handleSubmit}>
                <h1 className={style.title}>Contacta con nosotros</h1>
                <div className={style.container}>
                    <div className={style.name}>
                        <input
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            placeholder="Escribe tu nombre"
                        />
                        {errors.name && touched.name}
                    </div>
                    <div className={style.email}>
                        <input
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Email" type="email" />
                    </div>
                    {errors.email && touched.email}
                    <div className={style.reason}>
                        <textarea
                            className="reason"
                            name="reason"
                            onChange={handleChange}
                            value={values.reason}
                            placeholder="Escribe tu consulta" type="text"
                            rows="8" cols="50" />
                    </div>
                    {errors.reason && touched.reason}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting} >
                    {isSubmitting ? 'Submitting' : 'Submit'}
                </button>
            </form>
        )}
    </Formik>
}