import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const ErrorModal = (props) => {
  return (
    <>
      <Box
        pos={"fixed"}
        top="0"
        left="0"
        width={"100%"}
        height="100vh"
        zIndex={"10"}
        background="rgba(0, 0, 0, 0.75)"
        onClick={props.onConfirm}
      />
      <Box
        pos="fixed"
        top={"30vh"}
        left="10%"
        bg={"white"}
        boxShadow={"0 2px 8px rgba(0,0,0,0.26)"}
        borderRadius="10px"
        m={"2rem auto"}
        w="80%"
        max-width={"40rem"}
        zIndex="100"
        overflow={"hidden"}
      >
        <Heading as={"h2"} p="1rem" m="0" color="white" bg="#4f005f">
          {props.title}
        </Heading>
        <Text p="1rem">{props.message}</Text>
        <Flex p={"1rem"} display="flex" justifyContent={"flex-end"}>
          <Button
            type="submit"
            border={"1px solid #4f005f"}
            background="#4f005f"
            color={"white"}
            p={"0.25rem 1rem"}
            _hover={{ background: "#741188", borderColor: "#741188" }}
            _active={{ background: "#741188", borderColor: "#741188" }}
            _focus={{ outline: "none" }}
            onClick={props.onConfirm}
          >
            Okay
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default ErrorModal;
