import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/controllerLogoCropped.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    // chakra horizontal stack
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="20px" padding=".25em" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
