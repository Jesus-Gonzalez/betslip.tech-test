import { isProductionEnvironment } from 'utils'

const filename = isProductionEnvironment ? 'production' : 'development'

const { API } = require(`./${filename}.js`)

export { API }
