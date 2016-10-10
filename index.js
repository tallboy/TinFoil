const chalk = require('chalk');
const TinFoil = require('./src/tinfoil').TinFoil;

console.log(chalk.cyan('Password:'), chalk.yellow(TinFoil.generateRandomPassword(process.env.LENGTH, process.env.SPECIAL)));
