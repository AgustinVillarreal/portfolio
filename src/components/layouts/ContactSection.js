import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [contact, setContact] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);
  const { user_name, user_email, phone, message } = contact;

  useEffect(() => {
    if (submitForm) {
      if (Object.keys(errors).length === 0) {
        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            contact,
            process.env.REACT_APP_USER_ID
          )
          .then(
            (result) => {
              Swal.fire("Good job!", "The message has been sent", "success");
              console.log(result.text);
            },
            (error) => {
							Swal.fire("Please try again", "Something went wrong!", "error");
              console.log(error.text);
            }
          );
      }
      setSubmitForm(false);
    }
    //eslint-disable-next-line
  }, [errors]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errores = {};

    if (user_name.trim() === "") {
      errores.name = "Name Required";
    }
    if (user_email.trim() === "") {
      errores.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user_email)) {
      errores.email = "Invalid email address";
    }
    if (message.trim() === "") {
      errores.msg = "Message Required";
    }

    return errores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validate();
    setErrors(erroresValidacion);
    setSubmitForm(true);
  };

  return (
    // <!-- Contact Section-->
    <section className="page-section" id="contact">
      <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me!
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Contact Section Form--> */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form noValidate onSubmit={(e) => handleSubmit(e)}>
              <div className="form-floating">
                <input
                  className="form-control"
                  id="inputName"
                  type="text"
                  placeholder="Enter your name..."
                  onChange={handleChange}
                  value={user_name}
                  name="user_name"
                />
                {errors.name && (
                  <div className="alert alert-danger p-2 mt-2">
                    {errors.name}
                  </div>
                )}
                <label htmlFor="inputName">Name</label>
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  id="inputEmail"
                  type="email"
                  placeholder="Enter your email..."
                  value={user_email}
                  onChange={handleChange}
                  name="user_email"
                />
                {errors.email && (
                  <div className="alert alert-danger p-2 mt-2">
                    {errors.email}
                  </div>
                )}
                <label htmlFor="inputEmail">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  id="inputPhone"
                  type="tel"
                  placeholder="Enter your phone number..."
                  value={phone}
                  onChange={handleChange}
                  name="phone"
                />
                <label htmlFor="inputPhone">
                  Phone Number <span className="h6 fw-normal">(Optional)</span>
                </label>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="inputMessage"
                  placeholder="Enter your message here..."
                  style={{ height: "12rem" }}
                  value={message}
                  onChange={handleChange}
                  name="message"
                ></textarea>
                {errors.msg && (
                  <div className="alert alert-danger p-2 mt-2">
                    {errors.msg}
                  </div>
                )}
                <label htmlFor="inputMessage">Message</label>
              </div>
              <br />
              <button className="btn btn-primary btn-xl" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
