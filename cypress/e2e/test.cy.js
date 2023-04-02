import { Login } from "../pages/Login";

const LoginPage = new Login();

describe("Test", () => {
  it("Logowanie do LMS", () => {
    // visit page
    LoginPage.navigate();
    // check title
    LoginPage.validateLoginInputs();
    // check inputs
    LoginPage.validateInputs();
    // check button
    LoginPage.validateLoginButton();
    // check link
    LoginPage.validateLogOutButton();
  });
});
