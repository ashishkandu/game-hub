import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/react.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
  onClickLogo: () => void;
}

const NavBar = ({ onSearch, onClickLogo }: Props) => {
  return (
    <HStack padding="10px">
      <Image onClick={onClickLogo} src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
