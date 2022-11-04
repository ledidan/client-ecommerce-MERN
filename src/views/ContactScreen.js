import { Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const ContactScreen = () => {
  return (
    <div className="content">
      <Container maxW="container.sm">
        <div className="row align-items-center no-gutters contact-wrap">
          <div className="col-md-12">
            <Stack className="form h-100">
              <Heading as="h2" size="lg" h={70}>
                Liên hệ với chúng tôi
              </Heading>
              <form
                className="mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <div className="row">
                  <div className="col-md-6 form-group mb-5">
                    <label htmlFor className="col-form-label">
                      Họ Tên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Nhập tên"
                    />
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
                      placeholder="Nhập email.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group mb-5">
                    <label htmlFor className="col-form-label">
                      Điện thoại
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Nhấp SĐT..."
                    />
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
                      cols={55}
                      rows={4}
                      placeholder="Viết lời nhắn bạn muốn gửi"
                      defaultValue={""}
                    />
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
