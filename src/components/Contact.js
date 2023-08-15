import emailjs from "@emailjs/browser";
import { useState } from "react";
import { call, emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_8cmeu8m", // service id
          "template_9fuzqst", // template id
          mailData,
          "user_7jtxsEF7xkCIm0SGpWUG0" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <h3>Let&apos;s connect</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div className="text">
                <p>
                  Email me directly, fill out the form, or call me between 9 AM
                  and 7 PM ET, Mon - Fri
                </p>
              </div>
              <ul>
                <li>
                  <div className="list_inner">
                    {call}
                    <span>Call me</span>
                    <h3>
                      <a href="tel:4693644015">(469) 364-4015</a>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <h3>
                      <a
                        className="line_anim"
                        href="mailto:chris.warren.2019@gmail.com"
                      >
                        chris.warren.2019@gmail.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error ? "Something went wrong" : "Message Sent!"}
                    </span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={(e) => onChange(e)}
                          value={name}
                          placeholder="Name..."
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Email..."
                          name="email"
                          onChange={(e) => onChange(e)}
                          value={email}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Message..."
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="aali_tm_button">
                    <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
                      <span>Send {msgSent}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Contact;
