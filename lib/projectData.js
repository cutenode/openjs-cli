const projects = require('../data/projects.json')
const projectString = require('./projectString')
const invertKeyAndValue = require('./invertKeyAndValue')

function projectData (passedProjectString) {
  const key = invertKeyAndValue(projectString, passedProjectString) // identify the key of the project that was passed
  const returnable = {
    human: {},
    url: {}
  }

  for (let property in projects[key]) {
    if(property !== 'name' && property !== 'description')  {
      if(property === 'github') {
        returnable.human[property] = `GitHub: ${projects[key][property]}`
        returnable.url[property] = projects[key][property]
      }
      
      if(property === 'website') {
        returnable.human[property] = `Website: ${projects[key][property]}`
        returnable.url[property] = projects[key][property]
      }
      
      if(property === 'good-first-issue') {
        returnable.human[property] = {}
        returnable.human[property] = `Good First Issues: ${projects[key][property]}`
        returnable.url[property] = projects[key][property]
      }
    }
  }

  return returnable
}

module.exports = projectData