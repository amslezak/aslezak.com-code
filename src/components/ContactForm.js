import React from "react";
import { withFormik } from "formik";
import Yup from "yup";

import { Element } from "react-scroll";

// Styles
import styled from "react-emotion";
import { ThemeProvider } from "emotion-theming";
import "../css/aslezak.scss";
import theme from "../css/Theme";
import { Flex, Subhead, Box, Input, Label, Textarea, Heading } from "rebass";
import Button from "../styled/Button";
import XRay from "react-x-ray";

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
    <ThemeProvider theme={theme}>
      <Flex column>
        <form onSubmit={handleSubmit}>
          <Box w={1}>
            <Label f={2} color="#eee" pt={1}>
              Name
            </Label>
            <Input
              type="text"
              autoComplete="name"
              name="name"
              id="name"
              bg="#fff"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name ? "text-input error" : "text-input"
              }
              placeholder="Jane Appleseed"
            />
            {errors.name &&
              touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
          </Box>

          <Box w={1}>
            <Label f={2} color="#eee" pt={1} children="Email" />
            <Input
              autoComplete="email"
              bg="#fff"
              type="email"
              name="email"
              id="exampleEmail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
              placeholder="jane@appleseed.com"
            />
            {errors.email &&
              touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
          </Box>

          <Box w={1}>
            <Label f={2} color="#eee" pt={1} children="Message" />
            <Textarea
              bg="#fff"
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
          </Box>
          <Box w={1} my={3}>
            <Subhead f={1} align="left">
              <Button
                borderRadius={4}
                w={1}
                py={2}
                px={4}
                title="Send"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Send
              </Button>
            </Subhead>
          </Box>
        </form>
      </Flex>
    </ThemeProvider>
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
  handleSubmit: (values, { setSubmitting, resetForm }) => {
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

    setTimeout(() => {
      alert("Thanks for writing.  Your message has been sent to Andy!");
      setSubmitting(false);
    }, 500);
  }
})(EmailForm);

export default EnhancedForm;
