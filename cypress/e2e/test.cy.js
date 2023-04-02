import { Login } from "../pages/Login";

const LoginPage = new Login();

describe("Test", () => {
  it("Logowanie do LMS", () => {
    LoginPage.navigate();
    LoginPage.validateLoginInputs();
    LoginPage.validateInputs();
    LoginPage.validateLoginButton();
    LoginPage.validateLogOutButton();
  });
});
