const projectStrings = require('../lib/projectString')
const projectData = require('../lib/projectData')
const invert = require('../lib/invertKeyAndValue')
const open = require('open')
const inquirer = require('inquirer')

exports.command = '$0'

exports.describe = 'Check licenses in the current application or project, or a passed ].'

// Builds out command flags and descriptions
exports.builder = function (yargs) {
}

exports.handler = function (argv) {
  const projectPick = {
    type: 'list',
    name: 'projectChoice',
    message: 'Choose a project to learn more about',
    choices: Object.values(projectStrings)
  }

  inquirer
    .prompt([projectPick])
    .then(answer => {
      const projectChoiceAnswer = answer.projectChoice
      const projectDataFromAnswer = projectData(projectChoiceAnswer) // parse the answer from the first question into something we can use to extract data for the second question

      const projectDataQuestion = {
        type: 'list',
        name: 'projectDetails',
        message: 'Select a link you\'d like to open.',
        choices: Object.values(projectDataFromAnswer.human)
      }

      inquirer
        .prompt([projectDataQuestion])
        .then(answer => {
          const urlKey = invert(projectDataFromAnswer.human, answer.projectDetails)
          open(projectDataFromAnswer.url[urlKey])
          console.log(`Opened ${projectDataFromAnswer.url[urlKey]}!`)
        })
    })
}