describe('ui: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&knob-color&knob-style'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui!');
    });
});
