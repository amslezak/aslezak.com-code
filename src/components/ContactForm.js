import React from "react";
import { withFormik } from "formik";
import Yup from "yup";

import { Element } from "react-scroll";

// Styles
import styled from "react-emotion";
import { ThemeProvider } from "emotion-theming";
import "../css/aslezak.scss";
import theme from "../css/Theme";
import { Flex, Box, Input, Label, Button, Textarea } from "rebass";

const Header = styled.div`
  h1 {
    font-family: AvenirNext-Bold;
    font-size: 48px;
    color: #ffffff;
    line-height: 63px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
  }

  h2 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    color: #e4e4e4;
    letter-spacing: 1.5px;
    line-height: 24px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
  }
`;

const FormWrapper = styled.div`
  color: #e4e4e4;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EmailForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <Flex>
      <Box width={1}>
        <form onSubmit={handleSubmit}>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.name && touched.name ? "text-input error" : "text-input"
            }
            placeholder="Jane Appleseed"
          />
          {errors.name &&
            touched.name && <div className="input-feedback">{errors.name}</div>}

          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.email && touched.email ? "text-input error" : "text-input"
            }
            placeholder="jane@appleseed.com"
          />
          {errors.email &&
            touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
          <Label for="message">Message</Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Hi, Andy - let's work together!"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.message && touched.message
                ? "text-input error"
                : "text-input"
            }
          />
          {errors.message &&
            touched.message && (
              <div className="input-feedback">{errors.message}</div>
            )}

          <Button
            type="submit"
            title="Send"
            onClick={handleSubmit}
            block
            disabled={isSubmitting}
          >
            SUBMIT
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

const EnhancedForm = withFormik({
  mapPropsToValues: () => {
    name: "";
    email: "";
    message: "";
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message required")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert("Thanks for writing.  Your message has been sent to Andy!");
      setSubmitting(false);
    }, 250);

    var data = {
      from: values.name,
      email: values.email,
      to: "andyslezak@gmail.com",
      subject: "Hello from aslezak.com",
      text: values.message
    };

    fetch("https://fb1i386fj2.execute-api.us-east-1.amazonaws.com/dev/", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }
})(EmailForm);

export default EnhancedForm;
