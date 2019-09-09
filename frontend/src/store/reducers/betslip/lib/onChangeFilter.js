export const onChangeFilter = (state, { filter: selectedFilter }) => Object.assign(
  {},
  state,
  { selectedFilter }
)
