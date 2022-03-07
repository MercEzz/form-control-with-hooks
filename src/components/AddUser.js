import React, { useState } from "react";

import { Button, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (greater than 0).",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Flex
        bg={"white"}
        boxShadow={"0 2px 8px rgba(0,0,0,0.26)"}
        m={"2rem auto"}
        p={"1rem"}
        w="90%"
        max-width={"40rem"}
        borderRadius="10px"
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
            fontWeight={"bold"}
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
            fontWeight={"bold"}
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
    </>
  );
};

export default AddUser;
