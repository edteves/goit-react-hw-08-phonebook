import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelector';
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Center,
} from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  //filter name based on the the search keyword
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Center>
      <form>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel marginTop="20px">Find Contacts by Name</FormLabel>
            <Input
              type="text"
              name="filter"
              placeholder="Search by name"
              value={filter}
              onChange={handleFilterChange}
              marginBottom="20px"
            />
          </FormControl>
        </VStack>
      </form>
    </Center>
  );
};
