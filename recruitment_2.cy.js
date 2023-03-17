describe('form spec', () => {
    it('a', () => {
        cy.visit(' https://discover.arx.city/auth?signup=true')
        cy.get('[data-testid="form:terms-of-service"]').click()
        cy.url().should('eq', 'https://www.arx.city/legal/terms-of-service')
    })
})