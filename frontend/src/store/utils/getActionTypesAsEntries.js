export const getActionTypesAsEntries = actionTypes => (
  Object.entries(actionTypes)
    .reduce(
      (acc, [key, value]) => ({ ...acc, [value]: key }),
      {}
    )
)
