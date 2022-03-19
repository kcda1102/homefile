import { Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

export function SendDocumentHeader() {
  return (
    <Flex
      align="center"
      justify="space-between"
      bgColor="whiteAlpha.900"
      height="16"
      width="100%"
      p="3"
    >
      <Flex align="center">
        <Icon as={AiOutlineMail} fontSize={26} mr="2" />
        <Text>Send Document</Text>
      </Flex>
      <Icon as={BsThreeDots} fontSize={26} />
    </Flex>
  );
}
