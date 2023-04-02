export class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  validateLoginInputs() {
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

  validateLogOutButton() {
    cy.get(".css-7afvtf").click();
    cy.get(":nth-child(7) > .css-bve2vl").click();
  }
}

// class LoginPage {
//   navigate() {
//     return cy.visit("https://www.edu.goit.global/account/login");
//   }

//   enterEmail(username) {
//     return cy.get("#user_email").clear().type("username");
//   }

//   enterPassword(password) {
//     return cy.get("#user_password").clear().type("password");
//   }

//   submit() {
//     cy.get(".eckniwg2").click();
//   }

//   submit1() {
//     cy.get(".css-7afvtf").click();
//   }

//   submit2() {
//     cy.get(":nth-child(9) > .css-bve2vl").click();
//   }
// }
// export default LoginPage;
