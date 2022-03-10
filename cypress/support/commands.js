Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Adriano')
    cy.get('#lastName').type('Saadeh')
    cy.get('#email').type('adrianosaadeh@gmail.com')
    cy.get('#phone').type('999817741')
    cy.get('#open-text-area').type('testes de a área')
    cy.get('button[type="submit"]').click()
})
