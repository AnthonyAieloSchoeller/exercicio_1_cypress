
describe('Login', () => {
    it('Realizar login com sucesso', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')

        //Atc
        cy.get('[data-test="username"]').type('standard_user')
        /* Aqui o elemento usado para data-test é o [placeholder="Username"]*/

        cy.get('[data-test="password"]').type('secret_sauce')
        /* Já nesse o elemento usado no data-test é o [placeholder="Password"] */

        cy.get('[data-test="login-button"]').click()

        //Assert
        cy.url().should('equal','https://www.saucedemo.com/inventory.html')
    } )

    it('Realizar login com credenciais inválidas', ()=> {
        /*Observação: para fazer apenas um teste coloque um ".only" depois do "it" */

        //Arrange
        cy.visit('https://www.saucedemo.com/')

        //Atc
        cy.get('[data-test="username"]').type('user.invalid')

        cy.get('[data-test="password"]').type('senha')

        cy.get('[data-test="login-button"]').click()
        
        //Assert
        cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service')

        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

})