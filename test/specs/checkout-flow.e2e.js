const checkout = require('../pageobjects/Checkout.page');

describe('Cookunity Checkout Flow', () => {
    it('should complete checkout process', async () => {
        // Initial wait for app to load
        await driver.pause(5000);
        // Click on first product
        await checkout.firstProduct.click();
        // Add to cart 2 items
        await checkout.addToCartButton.click();
        await checkout.addToCartButton.click();
        //Go to cart
        await checkout.cartButton.click();
        // Wait for cart to load
        await driver.pause(2000);
        // Click on Proceed to Checkout button
        await checkout.proceedToCheckoutButton.click();
        await driver.pause(2000);
        // Fill in the login form
        await checkout.emailInput.setValue('bob@example.com');
        await checkout.passwordInput.setValue('10203040');
        await checkout.submitAccountButton.click();
        await driver.pause(2000);
        // Fill in the form
        await checkout.fullnameInput.setValue('My Name');
        await checkout.addressInput.setValue('Street 123');
        await checkout.cityInput.setValue('New York');
        await checkout.zipcodeInput.setValue('10001');
        await checkout.countryInput.setValue('United States');
        // Handle keyboard
        await checkout.handleKeyboard();
        // Click on Go to Payment button
        await checkout.goToPaymentButton.click();
        // Wait for payment method to be displayed
        await expect(checkout.paymentMethodText).toBeDisplayed();
        await expect(checkout.reviewOrderButton).toBeDisplayed();

    });
});