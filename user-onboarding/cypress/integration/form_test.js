describe('Form Input', function() {
    it('Navigate to page', function(){
        cy.visit('http://localhost:3000/')
    })

    it('First Name', function() {
        cy.get('input[name="first_name"]')
    })

    it('Last Name', function() {
        cy.get('input[name="last_name"]')
    })

    it('E-Mail', function() {
        cy.get('input[name="email"]')
    })

    it('Password', function() {
        cy.get('input[name="password"]')
    })

    it('TOS', function() {
        cy.get('input[name="terms"]')
    })
})

describe('Form Validation', function() {
    it('Navigate to page', function() {
        cy.visit('http://localhost:3000/')
    })

    it('Validate first_name input', function() {
        cy.get('input[name="first_name"]')
        .type('a')
        .clear()
        cy.contains('First Name is required')
    })

    it('Validate last_name input', function() {
        cy.get('input[name="last_name"]')
        .type('a')
        .clear()
        cy.contains('Last Name is required')
    })

    it('Validate email input', function() {
        cy.get('input[name="email"]')
        .type('a')
        .clear()
        cy.contains('Email is required')
    })

    it('Validate email input format', function() {
        cy.get('input[name="email"]')
        .type('test')
        cy.contains('The email must be a valid email address')
    })

    it('Validate password input', function() {
        cy.get('input[name="password"]')
        .type('a')
        cy.contains('Your password must be at least 6 characters long')
    })

    it('Button is disabled', function() {
        cy.get('#submit')
        .should("be.disabled")
    })
})

describe('Form Submission', function() {
    it('Navigate to page', function() {
        cy.visit('http://localhost:3000/')
    })
    it('Enter first_name', function() {
        cy.get('input[name="first_name"]')
        .type('Test')
        cy.contains('First Name is required').should('not.exist')
    })

    it('Enter last_name', function() {
        cy.get('input[name="last_name"]')
        .type('User')
        cy.contains('Last Name is required').should('not.exist')
    })

    it('Enter email', function() {
        cy.get('input[name="email"]')
        .type('User@test.com')
        cy.contains('The email must be a valid email address' || 'The email must be a valid email address').should('not.exist')
    })

    it('Enter password', function() {
        cy.get('input[name="password"]')
        .type('123456')
        cy.contains('Password is required' || 'Your password must be at least 6 characters long').should('not.exist')
    })

    it('Check TOS', function() {
        cy.get('input[name="terms"]')
        .click()
    })

    it('Submit Button is Enabled', function() {
        cy.get('#submit')
        .should("not.be.disabled")
    })

    it('Submit the Form', function() {
        cy.get('#submit')
        .click()
    })

})
