/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('exibe mensagem por 3 segundos com uso de cy.clock() e cy.tick() ', function() {
        cy.clock()
    
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    
        cy.tick(3000)
        cy.get('.success').should('not.be.visible')
    })

    Cypress._.times(5, function() {
        it('testa a página da política de privavidade 3x usando o loadash', function() {
            cy.visit('./src/privacy.html')
            cy.contains('Cypress Automation Testing').should('be.visible')
        })
    })
   
    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
          .invoke('hide')
          .should('not.be.visible')
        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
      })

    it('preenche a area de texto usando o comando invoke', function() {
        const longText = Cypress._.repeat('0123456789', 20)
        cy.get('#open-text-area')
            .invoke('val', longText)
            .should('have.value', longText)
    })

    it('faz uma requisição HTTP', function() {
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
            .should(function(response) {
                console.log(response)
                const { status, statusText } = response
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
            }) 
    })

})