#!/usr/bin/env node

const yargs = require('yargs')
const inquirer = require('inquirer')

yargs.scriptName('openjs')
  .usage('openjs')
  .commandDir('../commands')
  .help('help')
  .alias('help', 'h')
  .argv