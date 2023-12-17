import { useDispatch, useSelector } from 'react-redux';

import { updateFilter, getFilter } from '../../redux/filterSlice';
import { Wrapper, Text, Field } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Wrapper>
      <Text>Find contacts by name</Text>
      <Field
        type="text"
        value={filter}
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </Wrapper>
  );
};