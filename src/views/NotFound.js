import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <Stack className="page_404">
        <Container maxW="container.xxl">
          <div className="row">
            <div className="col-md-12 ">
              <div className="col-md-12 text-center">
                <div className="four_zero_four_bg">
                  <Heading as="h2" fontSize="80px" className="text-center ">
                    404
                  </Heading>
                </div>
                <div className="contant_box_404">
                  <Heading as="h2" fontSize="30px">
                    Bạn đang bị lạc đường hả
                  </Heading>
                  <Text>Có vẻ như trang của bạn tìm kiếm không tồn tại !</Text>
                  <Link to="/" className="link_404">
                    Trở về của hàng
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Stack>
    </React.Fragment>
  );
};

export default NotFound;
