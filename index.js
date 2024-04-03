#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");

const y = chalk.yellow;
const g = chalk.green;
const c = chalk.cyan;
const b = chalk.bold;
const i = chalk.italic;

const cardOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "blue",
    title: `${b("Beligh HAMDI")} - ${i("Principal Developer")}`,
    titleAlignment: 'center'
};

const content = `
${b("Social links")}

${g("Twitter")}            ${y("https://twitter.com/belighpro")}
${g("GitHub")}             ${y("https://github.com/beligh-hamdi")}
${g("LinkedIn")}           ${y("https://linkedin.com/in/beligh")}

`

const slidesContent = ``;

const card = boxen(content, cardOptions);

console.log(card);
