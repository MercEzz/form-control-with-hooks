import React, { useState } from "react";

import { Button, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < -1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Flex
      bg={"white"}
      boxShadow={"0 2px 8px rgba(0,0,0,0.26)"}
      m={"2rem auto"}
      p={"1rem"}
      w="90%"
      max-width={"40rem"}
    >
      <FormControl onSubmit={addUserHandler}>
        <FormLabel
          htmlFor="username"
          display={"block"}
          fontWeight="bold"
          mb="0.5rem"
        >
          Username
        </FormLabel>
        <Input
          id="username"
          type="text"
          display={"block"}
          w="100%"
          border={"1px solid #ccc"}
          p="0.15rem"
          mb={"0.5rem"}
          _focus={{ outline: "none", borderColor: "#4f005f" }}
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <FormLabel
          htmlFor="age"
          display={"block"}
          fontWeight="bold"
          mb="0.5rem"
        >
          Age (Years)
        </FormLabel>
        <Input
          id="age"
          type="number"
          display={"block"}
          w="100%"
          border={"1px solid #ccc"}
          p="0.15rem"
          mb={"0.5rem"}
          _focus={{ outline: "none", borderColor: "#4f005f" }}
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button
          type="submit"
          border={"1px solid #4f005f"}
          background="#4f005f"
          color={"white"}
          p={"0.25rem 1rem"}
          _hover={{ background: "#741188", borderColor: "#741188" }}
          _active={{ background: "#741188", borderColor: "#741188" }}
          _focus={{ outline: "none" }}
          onClick={addUserHandler}
        >
          Add User
        </Button>
      </FormControl>
    </Flex>
  );
};

export default AddUser;
