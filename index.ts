#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(
  chalk.greenBright.bold.bgWhiteBright(
    "\t\t\t\t\t\t Words Counter"
  )
);
console.log(chalk.blueBright("\nDeveloped By:"));
console.log(chalk.redBright.underline("\tHabib Ullah &"));
console.log(chalk.redBright.underline("\t Anees Hanif"));
console.log("\n");

async function main() {
    const startTime = Date.now(); // Capture start time for timer
  
    const { input } = await inquirer.prompt({
      type: 'input',
      name: 'input',
      message: chalk.yellowBright('Type as fast as you can for 1 minute. Press Enter when done:'),
    });
  
    const endTime = Date.now(); // Capture end time for timer
    const elapsedTime = (endTime - startTime) / 1000; // Time in seconds
  
    // Remove leading/trailing whitespace and split into words
    const words = input.trim().split(" ");
    const wordCount = words.length;
  
    const typingSpeed = Math.round(wordCount / elapsedTime * 60); // WPM calculation
  
    console.log(chalk.cyanBright.bold.italic.underline(`\tYou typed ${wordCount} words in ${elapsedTime.toFixed(2)} seconds.`));
    console.log(chalk.blueBright.bold.italic(`\tYour typing speed is approximately ${typingSpeed} WPM.`));
  }
  
  main().catch((error) => {
    console.error(error);
  });
  
  
  