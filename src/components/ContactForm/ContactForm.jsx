import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
        "Please enter a valid phone number"
      )
      .required("Required"),
  });

  const dispatch = useDispatch();
  const nameID = useId();
  const numberID = useId();

  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <label className={css.title} htmlFor={nameID}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameID} />
        <ErrorMessage className={css.message} name="name" component="span" />

        <label className={css.title} htmlFor={numberID}>
          Number
        </label>
        <Field className={css.field} type="text" name="number" id={numberID} />
        <ErrorMessage className={css.message} name="number" component="span" />

        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
