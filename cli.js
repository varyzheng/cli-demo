#!/usr/bin/env node

const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Your Project Name?',
  },
  {
    type: 'confirm',
    name: 'useEslint',
    message: 'Use Eslint?',
  },
  {
    type: 'checkbox',
    name: 'env',
    message: 'Project Enviroment?',
    choices: [
      {
        name: "browser",
        checked: true,
      },
      "node",
    ],
  },
]).then(anwsers => {
  console.log(anwsers);
  const templatesPath = path.join(__dirname, 'templates');
  const destPath = process.cwd();

  fs.readdir(templatesPath, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      ejs.renderFile(path.join(templatesPath, file), anwsers, (err, result) => {
        if (err) throw err;
        file = file.split('.');
        file.pop();
        file = file.join('.');
        if (file !== '.eslintrc.js' || anwsers.useEslint) {
          fs.writeFileSync(path.join(destPath, file), result);
        }
      })
    });
  })
})