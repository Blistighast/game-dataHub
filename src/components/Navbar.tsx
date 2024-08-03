import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/controllerLogoCropped.jpg";

const Navbar = () => {
  return (
    // chakra horizontal stack
    <HStack>
      <Image src={logo} boxSize="60px" borderRadius="20px" padding=".25em" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
