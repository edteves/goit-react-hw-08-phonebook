import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex
      minHeight="100vh"
      align="center"
      justify="center"
      // Optional background color
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Log In
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};
