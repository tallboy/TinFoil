const chalk = require('chalk');
const TinFoil = require('./src/tinfoil').TinFoil;

console.log(chalk.cyan('Password:'), chalk.yellow(TinFoil.generateRandomPassword(process.env.PASSWORD_LENGTH || 12, process.env.PASSWORD_SPECIAL || 'true')));
