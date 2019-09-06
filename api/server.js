const express = require('express')
const app = express()
const cors = require('cors')

const { bets } = require('./data/data.json')

app.use(cors())

app.use((req, res, next) => {
  res.contentType('application/json')
  next()
})

app.get('/decimalOddsMoreThanTwo', (req, res) => {
  const betList = bets
    .filter(bet => bet.odds.some(
      ({ oddsDecimal }) => oddsDecimal >= 2
    ))

  res
    .status(200)
    .end(JSON.stringify(betList))
})

app.get('/decimalOddsLessThanTwo', (req, res) => {
  const betList = bets
    .filter(bet => bet.odds.some(
      ({ oddsDecimal }) => oddsDecimal < 2
    ))

  res
    .status(200)
    .end(JSON.stringify(betList))
})

app.listen(4000, () => {
  console.log('Example app listening on port 4000!')
})
