import React, { useState } from 'react'
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import './Contacts.css'


export default function Contacts() {




  const [show, setShow] = useState(false);

  const form = useRef();

  const sendEmail = () => {

    // console.log(form);

    emailjs.sendForm('service_x75j168', 'template_937fi1r', form.current, 'DWJ2va3TagMunTagl')
      .then((result) => {
        console.log(result.text);
        // console.log("Письмо отправлено на почту");
      }, (error) => {
        console.log(error.text);
      });
  };




  return (
    <div>
      <h1>Оставьте свои контакты для связи со мной</h1>
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Поле пустое!';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Некорректный email адрес!';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          //  setTimeout(() => {
          //    alert(JSON.stringify(values, null, 2));
          //    setSubmitting(false);
          //  }, 400);
          setSubmitting(false);
          //отправка данных формы на почту
          setShow(true);
          sendEmail();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor=""> Введите свой email</label>
            <div className="form-wrapper">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='test@mail.ru'
              />
              {errors.email && touched.email && errors.email}
            </div>
            {/* <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password} */}

            <label htmlFor="">Введите ваше сообщение</label>
            <div className="form-wrapper">
              <textarea name="message" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Отправить
            </button>
          </form>
        )}
      </Formik>

      {show && <p> Ваши данные отправлены  </p>}
    </div>
  )
}
