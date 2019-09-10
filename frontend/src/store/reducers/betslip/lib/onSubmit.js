export const onSubmit = (state, { args: [values] }) => Object.assign(
  {},
  state,
  {
    totalStake: values.bet
      .filter(stake => stake)
      .map(stake => +stake.replace(',', '.'))
      .reduce((total, stake) => total + stake, 0)
  }
)
