import 'cypress-file-upload'
import 'cypress-iframe'
import 'cypress-mailosaur'
import './commands'

require('cypress-grep')()

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

module.exports = (on, config) => {
  require('cypress-grep/src/plugin')(config)
}