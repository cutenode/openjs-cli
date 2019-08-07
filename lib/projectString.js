const projects = require('../data/projects.json')
const returnable = {}

for (let project in projects) {
  const projectString = `${projects[project].name}: ${projects[project].description}`
  returnable[project] = projectString
}

module.exports = returnable