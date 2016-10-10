const chalk = require('chalk');
const Generator = require('./src/generator').Generator;

console.log(chalk.cyan('Password:'), chalk.yellow(Generator.generateRandomPassword(process.env.LENGTH, process.env.SPECIAL)));
