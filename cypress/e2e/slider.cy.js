describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {

  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('Ensures user can navigate slides using next and previous buttons', function () {
    cy.get('.swiper-slide-active')
      .invoke('index')
      .then((initialIndex) => {
        
        cy.get('.swiper-button-next').click();
        cy.wait(2000); 
        cy.get('.swiper-slide-active')
          .invoke('index')
          .should('not.eq', initialIndex);

        cy.get('.swiper-button-prev').click();
        cy.wait(500);
        cy.get('.swiper-slide-active')
          .invoke('index')
          .should('eq', initialIndex);
      });
  });

});

describe('Swiper Gallery Test', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('Verifies that each slide displays the correct title and description', function () {
    const expectedSlides = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' }
    ];

    expectedSlides.forEach((slide, index) => {
      if (index > 0) {
        cy.get('.swiper-button-next').click(); 
        cy.wait(2000); 
      }

      cy.get('.swiper-slide-active .card-description').within(() => {
        cy.get('h1')
          .should('be.visible')
          .and('contain', slide.title);
        
        cy.get('p')
          .should('be.visible')
          .and('contain', slide.description);
      });
    });
  });

});
