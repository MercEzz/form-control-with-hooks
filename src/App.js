import { Flex } from "@chakra-ui/react";

import React, { useState } from "react";

import AddUser from "./components/AddUser";
import UsersList from "./components/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Flex
      as="main"
      direction="column"
      minH="100vh"
      py="6"
      px="6"
      bgColor="#1f1f1f"
    >
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Flex>
  );
};

export default App;
