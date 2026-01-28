class CartPage {

    sumOfProdact() {
        let totalprice = 0;
        // AJOUT DU RETURN ICI
        return cy.get('tr td:nth-child(4) strong').each(($el) => {
            const amount = $el.text();
            let res = amount.replace(/[^0-9]/g, "");
            totalprice = totalprice + Number(res);
        }).then(() => {
            // On retourne la valeur finale wrapée
            return cy.wrap(totalprice);
        });
    }

    verifyTotalPrice(calculatedSum: number) {
        cy.get('h3 strong').then((element) => {
            const totalValue = element.text().replace(/[^0-9]/g, "");
            expect(Number(totalValue)).to.equal(calculatedSum);
        });
    }
}
export default CartPage;