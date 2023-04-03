export class HomePage {
  getLogOutButton() {
    cy.get(".css-7afvtf").click();
    cy.get(":nth-child(7) > .css-bve2vl").click();
  }
}
export default HomePage;
