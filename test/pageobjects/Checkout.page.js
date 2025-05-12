class Checkout {
    get firstProduct() {
        return driver.isAndroid 
            ? $('android=new UiSelector().text("Sauce Labs Backpack")')
            : $('~Sauce Labs Backpack');
    }

    get addToCartButton() {
        return driver.isAndroid 
            ? $('android=new UiSelector().text("Add To Cart")')
            : $('~Add To Cart button');
    }

    get cartButton() {
        return driver.isAndroid 
            ? $('android=new UiSelector().description("cart badge")')
            : $('~tab bar option cart');
    }

    get proceedToCheckoutButton() {
        return $('~Proceed To Checkout button');
    }

    get emailInput() {
        return $('~Username input field');
    }

    get passwordInput() {
        return $('~Password input field');
    }

    get submitAccountButton() {
        return $('~Login button');
    }

    get fullnameInput() {
        return $('~Full Name* input field');
    }

    get addressInput() {
        return $('~Address Line 1* input field');
    }

    get cityInput() {
        return $('~City* input field');
    }

    get zipcodeInput() {
        return $('~Zip Code* input field');
    }

    get countryInput() {
        return $('~Country* input field');
    }

    get goToPaymentButton() {
        return $('~To Payment button');
    }

    get paymentMethodText() {
        return driver.isAndroid 
            ? $('android=new UiSelector().text("Enter a payment method")')
            : $('~Enter a payment method');
    }

    get reviewOrderButton() {
        return $('~Review Order button');
    }

    get returnButton() {
        return $('~Return');
    }


    /**
     * Handles keyboard hiding based on device platform.
     * For Android: Uses hideKeyboard method
     * For iOS: Uses return button
     */
    async handleKeyboard() {
        if (driver.isAndroid) {
            try {
                await driver.hideKeyboard();
            } catch (e) {
                await driver.execute('mobile: hideKeyboard');
            }
        } else {
            await this.returnButton.click();
        }
    }

}

module.exports = new Checkout();