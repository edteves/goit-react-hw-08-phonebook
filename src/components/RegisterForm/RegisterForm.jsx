import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" name="name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};
