import { Icon } from '@chakra-ui/icons';
import {
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import {
  FiClock,
  FiCalendar,
  FiHelpCircle,
  FiHome,
  FiSearch,
} from 'react-icons/fi';

import Logo from './logo';
import NavButton from './nav-button';
import UserProfile from './user-profile';

const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-accent"
      color="on-accent"
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Logo />
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="on-accent" boxSize="5" />
            </InputLeftElement>
            <Input placeholder="Search" variant="filled" colorScheme="blue" />
          </InputGroup>
          <Stack spacing="1">
            <NavButton to="/" label="Home" icon={FiHome} />
            <NavButton
              to="/time-converter"
              label="International Time Converter"
              icon={FiClock}
            />
            <NavButton to="/calendar" label="Calendar" icon={FiCalendar} />
          </Stack>
        </Stack>
        <Stack spacing={{ base: '5', sm: '6' }}>
          <Stack spacing="1">
            <NavButton to="/support" label="Support" icon={FiHelpCircle} />
          </Stack>
          <Divider />
          <UserProfile
            name="Euan Mendoza"
            image="https://tinyurl.com/yhkm2ek8"
            email="bebopbamf@effectfree.dev"
          />
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);

export default Sidebar;
