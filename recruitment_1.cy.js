describe('form spec', () => {

    beforeEach(() => {
        cy.visit(' https://discover.arx.city/auth?signup=true')
        cy.get('[data-testid="form:last-name"]').type("Doe")
        cy.get('[data-testid="form:work-email"]').type("johndoe@email.com")
        cy.get('[data-testid="form:phone-number"]').type("1234567890")
        cy.get('[data-testid="form:company-name"]').type("company")
        cy.get('[data-testid="form:password"]').type("")
    })

    afterEach(() => {
        cy.get('[data-testid="form:sign-up-button"]').click()
        cy.get('[data-testid="form:alert"]').should('exist')
    })

    it('a', () => {
        cy.get('[data-testid="form:first-name"]').type("John")
        cy.get('[data-testid="form:confirm-password"]').type("")
    })

    it('b', () => {
        cy.get('[data-testid="form:confirm-password"]').type("")
        cy.get('[data-testid="form:checkbox"]').click()
    })

    it('c', () => {
        cy.get('[data-testid="form:confirm-password"]').type("")
        cy.get('[data-testid="form:checkbox"]').click()
    })
})