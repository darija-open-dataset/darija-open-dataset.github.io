describe('Home Page', () => {

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Should redirect to the GitHub page when the GitHub link is clicked', () => {
    cy.get('.cy-btn-github').click();
    cy.request({
      url: 'https://github.com/darija-open-dataset/dataset/',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

});
