
it('google test', function () {
    //Login Page          
    cy.visit('https://103.94.159.144:8080/bom/index.html#/login')
  
  
    cy.login('RM1', 'Test@123')
    cy.fixture('users').then(user => {
      // cy.log(user.userCode)
  
      //dashboard
      cy.visit('https://103.94.159.144:8080/bom/index.html#/setup/user')
  
      //Enter UserCode
      cy.get('input[name="userCode"]').type(user.userCode)
  
      //Enter UserName
      cy.get('input[name="userName"]').type(user.userName)
  
      //Enter tmsLoginId
      cy.get('input[name="tmsLoginId"]').type(user.tmsLoginId)
  
      //Enter mobileNumber
      cy.get('input[name="mobileNumber"]').type(user.mobileNumber)
  
      //Enter emailAddress
      cy.get('input[name="emailAddress"]').type(user.emailAddress)
      cy.wait(500);
  
      //Select Gender
      cy.get("select").eq(0).select("MALE", { force: true })
      cy.wait(500);
  
      //Select Branch
      cy.get("select").eq(1).select("KTM")
      cy.wait(500);
  
      //Select Allow Payment 
      cy.get("select").eq(2).select("Yes")
      cy.wait(500);
  
      //Select Allow Purchase Share Transfer
      cy.get("select").eq(3).select("Yes")
      cy.wait(500);
  
    
  
      //Select User Type
      cy.get("select").eq(4).select(user.UserType).wait(1000)
      cy.log(user.UserType != 'Super User')
      if (user.UserType != 'Super User') {
        
        cy.get('select').eq(6).select('ACCOUNT USER');
      }
  
    //Select KYC Update
    cy.get("select").eq(5).select("No")
  
    cy.get('button').contains('Add').click()
    })
  })