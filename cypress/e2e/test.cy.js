import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const LoginPage = new Login();
const MainPage = new HomePage();

describe("Test", () => {
  it("Logowanie do LMS", () => {
    LoginPage.navigate();
    LoginPage.fillLoginForm();
    LoginPage.validateInputs();
    LoginPage.validateLoginButton();
    MainPage.getLogOutButton();
  });
});
