import { Container, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InlineError from "../components/ContactForm/InlineError";
import {
  validateEmail,
  validateMessage,
  validateName,
  validateSubject,
} from "../components/ContactForm/Validation";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [subjectError, setSubjectError] = useState();
  const [messageError, setMessageError] = useState();

  useEffect(() => {
    // VALIDATION
    validateName({ name, setNameError });
    validateEmail({ email, setEmailError });
    validateSubject({ subject, setSubjectError });
    validateMessage({ message, setMessageError });
  }, [name, email, subject, message]);

  return (
    <div className="content">
      <Container maxW="container.sm">
        <div className="row align-items-center no-gutters contact-wrap">
          <div className="col-md-12">
            <Stack className="form h-100">
              <Heading as="h2" size="lg" h={70}>
                Liên hệ với tôi
              </Heading>
              <form
                className="mb-5"
                method="post"
                id="contact-form"
                name="contact-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group mb-5">
                    <label htmlFor className="col-form-label">
                      Họ Tê<n></n>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Nhập tên"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {nameError && <InlineError error={nameError} />}
                  </div>
                  <div className="col-md-6 form-group mb-5">
                    <label htmlFor className="col-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Nhập email.."
                    />
                    {emailError && <InlineError error={emailError} />}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-5">
                    <label htmlFor className="col-form-label">
                      Tiều đề
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Nhập tiêu đề "
                      required
                    />
                    {subjectError && <InlineError error={subjectError} />}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-5">
                    <label htmlFor="message" className="col-form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      cols={55}
                      rows={4}
                      placeholder="Viết lời nhắn bạn muốn gửi"
                      defaultValue={""}
                      required
                    />
                    {messageError && <InlineError error={messageError} />}
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="btn btn-dark">
                    GỬI
                  </button>
                </div>
              </form>
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactScreen;
