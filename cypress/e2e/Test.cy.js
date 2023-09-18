it('Generate Manual Payment', function () {
    //Login Page          
    cy.visit('https://103.94.159.144:8080/bom/index.html#/login')


    cy.login('RM1', 'Test@123')
    cy.fixture('users').then(user => {

        //dashboard
        cy.visit('https://103.94.159.144:8080/bom/index.html#/payment')

        //Enter Manual Number
        cy.get('input[name="referenceCode"]').type(user.ManualNumber)
        cy.wait(300);

        //Select Paid In
       

        //Select Client Name
        cy.get('#rw_1_input').click().type('AJAY KUMAR', { timeout: 10000 }).contains('AJAY KUMAR SHRESTHA [AS136463]').type('{enter}').click({ force: true })

        //Select Branch
        cy.get("select").eq(3).type("Global IME Bank[7501010001244", { force: true })
        cy.wait(300);

        //Select Bank
        cy.get('#rw_4_input').type('Prabhu Bank', { timeout: 10000 }).contains('Prabhu Bank[00100100008977000001]').click({ force: true });
        cy.wait(300);

        //Enter Amount
        cy.get('input[name="paidAmount"]').type(user.paidAmount)
        cy.wait(300);

        //Enter description
        cy.get('textarea[name="description"]').type('Test', { force: true })
        cy.wait(300);

        //Click Save
        cy.get('button[type=submit]').contains('Save').click({ force: true })
        cy.wait(300);

        cy.get("select").eq(1).select(user.PaidIn)
        cy.log(user.PaidIn != 'EFT')
        if (user.PaidIn != 'EFT') {

            cy.get('input[name="payAgainst"]').type('Test')
            cy.get('#rw_4_input').type('2', { timeout: 10000 }).contains('21').click({ force: true });
        }

        // Select Payment Channel
        cy.get("select").eq(2).select("One PG", { force: true })
        cy.wait(300)

    })
})
