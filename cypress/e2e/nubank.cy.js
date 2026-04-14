describe('Validar formulario', () => {

    it('Deve preencher e enviar o formulário', () => {
        // 1. Abrir a página do site do Nubank
        cy.visit('https://nubank.com.br/home')
        // 2. Clicar no botão "Quero ser Nubank"
        cy.get('.css-wl6yh0').click()
        // 3. Preencher campo CPF
        cy.get('.chakra-stack > :nth-child(1) > .chakra-input__group > [name="cpf"]').type('23261539100')
        // 4. Preencher campo Nome
        cy.get('[name="name"]').type('Gabriel Julio Miguel Araújo')
        // 5. Preencher campo Celular
        cy.get('[name="phone"]').type('96995455492')
        // 6. Preencher campo Email
        cy.get('[name="email"]').type('gabriel.julio.araujo@emayl.com')
        // 7. Preencher campo Confirmação de Email
        cy.get('[name="emailConfirmation"]').type('gabriel.julio.araujo@emayl.com')
        // 8. Clicar no Checkbox
        cy.get('.chakra-checkbox__label > .chakra-text > :nth-child(1)').click()
        // 9. Clicar em Enviar
        cy.get('.css-tz7fsy > .chakra-button').should('be.enabled').click()
    





    })
})