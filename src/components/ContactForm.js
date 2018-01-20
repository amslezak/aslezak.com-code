import React from "react";
import styled from "react-emotion";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { withFormik } from "formik";
import Yup from "yup";
import Button from "../components/Button";
import "../css/aslezak.scss";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";

import { Element } from "react-scroll";

const Wrapper = styled.div`
  padding: 0;

  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
    height: 80vh;
  }

  @media (max-width: 414px) {
    height: 76vh;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 375px) {
    height: 72vh;
    background-color: transparent;
  }
`;

const Header = styled.div`
  margin: 0;
  padding: 0;

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

  @media (max-width: 1440px) {
  }

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 25px;
  }

  @media (max-width: 414px) {
    padding: 25px 0 0 0;
    margin: 0;

    h2 {
      display: none;
    }
  }
`;

const FormWrapper = styled.div`
  color: #e4e4e4;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1440px) {
    padding: 50px 0;
  }
  @media (max-width: 1024px) {
    padding: 25px 0;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 414px) {
    padding: 0;
    margin: 0;
  }
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
    <Wrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
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
              touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
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
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="exampleText"
              style={{ height: "100px" }}
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
          </FormGroup>

          <Button
            type="submit"
            title="Send"
            onClick={handleSubmit}
            block
            disabled={isSubmitting}
          >
            SUBMIT
          </Button>
        </Form>
      </FormWrapper>
    </Wrapper>
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
