import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";
import { TfiPackage } from "react-icons/tfi";
export default function ContactInfo() {
  const headingInfo = [
    {
      id: 1,
      heading: "Miễn phí ship trên $100",
      description:
        "Miễn phí vận chuyển trên toàn thế giới với nhiều ưu đãi dành riêng cho khách hàng thân yêu",
      icon: <CiDeliveryTruck size={80} />,
    },
    {
      id: 2,
      heading: "-10% đăng ký nhận thông tin email",
      description:
        "Nhiều khách hàng tin tưởng giao những nhu cầu về giày varius cho chúng tôi, và sự hài lòng của khách hàng là niềm tự hào của chúng tôi",
      icon: <SlEnvolopeLetter size={50} />,
    },
    {
      id: 3,
      heading: "Đổi trả miễn phí tại cửa hàng",
      description:
        "Bạn có thể nhận được nhiều loại giày khác nhau với chất lượng cao nhất với giá cả phải chăng",
      icon: <TfiPackage size={50} />,
    },
  ];

  return (
    <Box as="section" py="14" px={{ base: "4", md: "8" }} mt={100}>
      <Flex align="center" justify="center">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "6", md: "12" }}>
          {headingInfo.map((item) => (
            <VStack gap="15px" border="2px dashed #333" borderRadius={10} p={5}>
              <Center className="info-image">{item.icon}</Center>
              <Heading
                as="h3"
                size={{ base: "sm", md: "md" }}
                w={[200, 300, 400]}
                textTransform="uppercase"
                textAlign="center"
                fontWeight="bold"
              >
                {item.heading}
              </Heading>
              <Text size="sm" textAlign="center">
                {item.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
