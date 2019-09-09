export const onSubmit = (state, { args: [values] }) => Object.assign(
  {},
  state,
  {
    totalStake: values.bet
      .map(stake => +stake.replace(',', '.'))
      .reduce((total, stake) => console.log('total', total, 'stake', stake) || total + stake, 0)
  }
)
