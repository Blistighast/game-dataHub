import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/controllerLogoCropped.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    // chakra horizontal stack
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="20px" padding=".25em" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
