export const getActionTypesAsEntries = actionTypes => (
  actionTypes.entries()
    .reducer((acc, [key, value]) => ({ ...acc, [value]: key }), {})
)
