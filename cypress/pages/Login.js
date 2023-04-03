export class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  fillLoginForm() {
    cy.get("#user_email").type("testowyqa@qa.team");
    cy.get("#user_password").type("QA!automation-1");
  }

  validateInputs() {
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
  }

  validateLoginButton() {
    cy.get(".eckniwg2").click();
  }
}
export default Login;
