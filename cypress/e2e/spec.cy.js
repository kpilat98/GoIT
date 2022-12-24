describe('GO IT Recruitment Task', () => {
  const email = "user888@gmail.com"
  const password = 1234567890
  it('login and add homework',  () => {
   cy.visit('https://www.edu.goit.global/pl/account/login')
   cy.loginToPage(email,password)
   cy.addHomeWorkAgain()
  })
})