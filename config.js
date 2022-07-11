const dotenv = require('dotenv');
const path = require('path');
const configVar = 3;

dotenv.config({
  path: path.resolve(__dirname, process.argv[configVar] + '.env')
});
module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT
}
