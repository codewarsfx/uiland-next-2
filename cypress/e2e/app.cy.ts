describe('Navigation', () => {
	it('should navigate to the pricing page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/');

		// Find a link with an href attribute containing "pricing" and click it
		cy.get('a[href*="pricing"]').click();

		// The new url should include "/pricing"
		cy.url().should('include', '/pricing');

		// The new page should contain an h1 with "About page"
		cy.get('h1').contains('Get Inspired by UI designs');
	});
});

// Prevent TypeScript from reading file as legacy script
export {};
