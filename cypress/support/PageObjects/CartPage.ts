class CartPage {

    sumOfProdact() {
        let totalprice = 0;
        cy.get('tr td:nth-child(4) strong').each(($el) => {
            //Get the text (e.g., "₹. 50000")
            const amount = $el.text();
            let res = amount.replace(/[^0-9]/g, "");
            //cy.log(res);
            totalprice = totalprice + Number(res);
        }).then(() => {
            return cy.wrap(totalprice); // On "wrap" le total pour le passer au .then() suivant
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