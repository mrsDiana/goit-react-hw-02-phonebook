import { Filter as FilterContainer, InputFilter } from './Filter.styled';
export const Filter = ({ value, onFilter }) => {
  return (
    <FilterContainer>
      Find contacts by name:
      <InputFilter type="text" value={value} onChange={onFilter} />
    </FilterContainer>
  );
};
