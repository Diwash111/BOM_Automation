//add  username old password and new password
var user =  'RM1'
var OldPassword = 'Web@123'
var NewPassword = 'Test@123'
describe('Profile Change password', () => {
  it('Change Password', () => {
    cy.visit('https://103.94.159.144:8080/bom/index.html#/login')
    cy.login('RM1', 'Web@123')
    cy.fixture('users').then(user => {
    cy.visit('https://103.94.159.144:8080/bom/index.html#/setup/change-password')
    cy.get(`input[name='oldPassword']`).type(OldPassword)
    cy.get(`input[name='newPassword']`).type(NewPassword)
    cy.get(`input[name='rePassword']`).type(NewPassword)
    cy.get('button').contains('Change').click({force: true})
    //cy.get(`a`).contains('Back to Login').click()
   // cy.visit('http://uatthaili.digihub.com.np')
   cy.login('RM1', NewPassword)
  })
})
})