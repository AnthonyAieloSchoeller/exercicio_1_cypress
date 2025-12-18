describe('carrinho', ()=> {
    it('simulação de compra', ()=> {
        //Arrange (contexto ou configuração)
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        //Atc
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'). click()

        //Assert
        cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1')

        cy.get('#shopping_cart_container').click()
        /*Observação: quando for usar um elemeto "id" para teste use o "#" */

        cy.contains('Sauce Labs Backpack').should('be.visible')
    })
})
