it('google test', function () {
    //Login Page          
    cy.visit('https://103.94.159.144:8080/bom/index.html#/login')


    cy.login('RM1', 'Test@123')
    cy.fixture('users').then(user => {
        // cy.log(user.userCode)

        //dashboard
        cy.visit('https://103.94.159.144:8080/bom/index.html#/receipt');

        //Enter Manual Number
        cy.get('input[name="manualSlipNo"]').type('10')
        cy.wait(300);

        //Select Branch
        cy.get("select").eq(0).select("KTM")
        cy.wait(500);

        //Select Client Name
        cy.get('#rw_1_input').click().type('AJAY KUMAR', { timeout: 10000 }).contains('AJAY KUMAR SHRESTHA [AS136463]').type('{enter}').click({ force: true })
        cy.wait(500);

        // //Enter Received From
        // cy.get('input[name="receivedFrom"]').type('tester')
        // cy.wait(500);

        //Select Received In
        cy.get("select").eq(1).select("Bank")
        cy.wait(500);

        //Select Received In
        cy.get("select").eq(3).select("Prabhu Bank [00100100008977000001 ]")
        cy.wait(500);

        //Select Bank
        cy.get('#rw_8_input').type('Laxmi', { timeout: 10000 }).contains('Laxmi Bank').click({ force: true });
        cy.wait(300);

        //Enter Reference No
        cy.get('input[name="detail[0].referenceNo"]').type('10')
        cy.wait(500);

        // Enter Amount
        cy.get('input[name="detail[0].receiveAmount"]').type('1000')

        //Enter description
        cy.get('textarea[name="description"]').type('Test', { force: true })
        cy.wait(300);

        //Click Save
        cy.get('button[type=submit]').contains('Save').click({ force: true })
        cy.wait(300);

        //Approve receipt
        cy.visit('https://103.94.159.144:8080/bom/index.html#/receipt/approve')

        // //Select Client Name
        // cy.get('.rw-dropdown-list-input').click().type('AJAY KUMAR',{ timeout: 10000 }).contains('AJAY KUMAR PURBEY[AP258543]').type('{enter}').click({ force: true })
        // cy.wait(500);

        //Click Save
        cy.get('button[type=submit]').contains('Search').click({ force: true })
        cy.wait(300);

    })
})