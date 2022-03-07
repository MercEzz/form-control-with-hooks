import { ListItem, UnorderedList, Flex } from "@chakra-ui/react";

const UsersList = (props) => {
  return (
    <Flex
      bg={"white"}
      boxShadow={"0 2px 8px rgba(0,0,0,0.26)"}
      m={"2rem auto"}
      p={"1rem"}
      w="90%"
      max-width={"40rem"}
    >
      <UnorderedList listStyleType={"none"} p={"1rem"}>
        {props.users.map((user) => (
          <ListItem
            border={"1px solid #ccc"}
            margin={"0.5 rem 0"}
            p={"0.5rem"}
            key={user.id}
          >
            {user.name} ({user.age} years old)
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default UsersList;
