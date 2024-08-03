import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/controllerLogoCropped.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    // chakra horizontal stack
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="20px" padding=".25em" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
