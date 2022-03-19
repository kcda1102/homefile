import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";

export function InviteButton() {
  return (
    <Button
      variant="unstyled"
      borderRadius={0}
      bgColor="blue.500"
      color="gray.50"
      height="40px"
      width="90%"
      mx="auto"
      my="4"
      p="3"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      _hover={{
        filter: "brightness(1.1)",
      }}
    >
      <Flex align="center">
        <AddIcon fontSize={20} />
        <Text fontWeight="thin" ml="2" fontSize={[12, 14]}>
          CREATE INVITE
        </Text>
      </Flex>
      <Flex
        color="whiteAlpha.900"
        borderRadius="100%"
        bgColor="blue.400"
        p="6px"
      >
        <Icon as={FiChevronRight} fontSize={20} />
      </Flex>
    </Button>
  );
}
