describe('form spec', () => {

    const confirmPass = Math.random().toString(20).substring(2, 10)

    beforeEach(() => {
        cy.visit(' https://discover.arx.city/auth?signup=true')
        cy.get('[data-testid="form:first-name"]').type("John")
        cy.get('[data-testid="form:last-name"]').type("Doe")
        cy.get('[data-testid="form:work-email"]').type("johndoe@email.com")
        cy.get('[data-testid="form:phone-number"]').type("1234567890")
        cy.get('[data-testid="form:company-name"]').type("company")
        cy.get('[data-testid="form:password"]').type(Cypress.env('password'))
    })

    afterEach(() => {
        cy.get('[data-testid="form:sign-up-button"]').click()
        cy.get('[data-testid="form:alert"]').should('exist')
    })

    it('User doesn’t check terms and condition checkbox', () => {
        cy.get('[data-testid="form:confirm-password"]').type(Cypress.env('password'))
    })

    it('User doesn’t provide any input in “First name” field', () => {
        cy.get('[data-testid="form:confirm-password"]').type(Cypress.env('password'))
        cy.get('[data-testid="form:checkbox"]').click()
        cy.get('[data-testid="form:first-name"]').clear()
    })

    it('User password and confirm password field have mismatching inputs', () => {
        cy.get('[data-testid="form:confirm-password"]').type(confirmPass)
        cy.get('[data-testid="form:checkbox"]').click()
    })
})