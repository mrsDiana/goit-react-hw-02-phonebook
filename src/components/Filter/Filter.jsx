export const Filter = ({ value, onFilterName }) => {
  return (
    <label>
      Find contacts by name:
      <input type="text" value={value} onChange={onFilterName} />
    </label>
  );
};
