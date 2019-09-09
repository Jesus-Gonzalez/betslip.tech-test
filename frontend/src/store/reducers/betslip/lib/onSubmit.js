export const onSubmit = (state, { args: [values] }) => Object.assign(
  {},
  state,
  {
    totalStake: values.bet
      .map(parseFloat)
      .reduce((total, stake) => total + stake, 0)
  }
)
