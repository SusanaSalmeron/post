import React from 'react';
import { Formik } from 'formik';
import style from './contact.module.css';



const validation = values => {
    let errors = {};

    if (!values.email) {
        errors.email = 'Este campo no puede estar vacio';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9·-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email incorrecto';
    }
    if (!values.name) {
        errors.name = 'Introduce un email'
    } else if (values.name.length <= 3) {
        errors.name = "El nombre tiene que ser mayor a 3 caracteres"
    }
    if (!values.reason) {
        errors.reason = 'Escribe tu consulta'
    }
    return errors;
}


export default function Contact() {

    return <Formik
        initialValues={{
            name: '',
            email: '',
            reason: ''
        }}

        onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 1000);
            resetForm({ values: '' })


        }}
        validate={validation}
    >

        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,

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
                    </div>
                    {errors.name && touched.name && <p className={style.error}>{errors.name}</p>}

                    <div className={style.email}>
                        <input
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Email" type="email" />
                    </div>
                    {errors.email && touched.email && <p className={style.error}>{errors.email}</p>}
                    <div className={style.reason}>
                        <textarea
                            className="reason"
                            name="reason"
                            onChange={handleChange}
                            value={values.reason}
                            placeholder="Escribe tu consulta" type="text"
                            rows="8" cols="50" />
                    </div>
                    {errors.reason && touched.reason && <p className={style.error}>{errors.reason}</p>}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting} >
                    {isSubmitting ? 'Enviando' : 'Enviar'}
                </button>
            </form>
        )}
    </Formik>
}