/*--------------------------------------------------------*
*               Author: Paul Panaitescu                   *
*        Testing Exercise - Selenium [23.APR.2020]        *
* --------------------------------------------------------*/

/*--------------------------------------------------------*
*                    Terminal commands:                   *
*       Install: npm install                              *
*                npm install selenium-webdriver           *
*                npm install chromedriver                 *
*       Run tests: npm run selenium-tests                 *
*                                                         *
*                    Customize:                           *
*       Change the File Path from line 42, to point       *
*       to the index file                                 *
* --------------------------------------------------------*/

const {Builder, By} = require('selenium-webdriver');
let mocha = require('mocha');
let chai = require('chai');
let describe = mocha.describe;
let chrome = require('selenium-webdriver/chrome');
let chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

chai.should();
// Customize the DURATION of Sleep to make sure that all the elements are loaded

// let sleepTime = 100; // 0,1 seconds - FAST
let sleepTime = 200; // 0,1 seconds - MEDIUM
// let sleepTime = 500; // 0,5 seconds - MEDIUM
// let sleepTime = 1000; // 1 second - FAST

let driver = new Builder().forBrowser('chrome').build();

describe('Test the KeaNET Website', () => {
    describe('Open the file', () => {
        it('should open the index.html file', async () => {
            await driver.sleep(sleepTime);
            // Change the File Path, to point to the index file
            await driver.get('file:////Users/paul/Downloads/Testing - Selenium exercise [23.APR.2020]/index.html');
        });
        it('should check the Page Title', async () => {
            await driver.sleep(sleepTime);
            let getPageTitle = await driver.getTitle();
            getPageTitle.should.eql('KEANet');
        });
    });
    describe('Test the Internet Connection functionality', () => {
        it('should check if the "Total Price" is set to 0 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 0 DKK');
        });

        // Internet connection - set it to true
        it('should click on the "Internet connection" checkbox', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.id("chkInternetConnection")).click();
        });
        it('should check if the "Internet connection" checkbox is Checked', async () => {
            await driver.sleep(sleepTime + 200);
            let isChecked = await driver.findElement(By.id("chkInternetConnection")).isSelected();
            isChecked.should.eql(true);
        });
        it('should check if the "Total Price" is set to 200 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 200 DKK');
        });

        // Internet connection - set it to false
        it('should click on the "Internet connection" checkbox', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.id("chkInternetConnection")).click();
        });
        it('should check if the "Internet connection" checkbox is Unchecked', async () => {
            await driver.sleep(sleepTime + 200);
            let isChecked = await driver.findElement(By.id("chkInternetConnection")).isSelected();
            isChecked.should.eql(false);
        });
        it('should check if the "Total Price" is set to 0 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 0 DKK');
        });

        // Internet connection - set it to true
        it('should click on the "Internet connection" checkbox', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.id("chkInternetConnection")).click();
            await driver.sleep(sleepTime + 200);
        });
    });
    describe('Test the Phone lines functionality', () => {
        it('should set the "Phone lines" input to 3', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.id("txtPhoneLines")).clear();
            await driver.findElement(By.id("txtPhoneLines")).sendKeys(3);
        });
        it('should check if the "Phone lines" input value is set to 3', async () => {
            await driver.sleep(sleepTime + 200);
            let numberOfPhoneLines = await driver.findElement(By.id("txtPhoneLines")).getAttribute("value");
            numberOfPhoneLines.should.eql('3');
        });
        it('should check if the "Total Price" is set to 650 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 650 DKK');
        });
    });
    describe('Test the Cell Phones functionality', () => {
        // Add "Motorola G99"
        it('should click on "Motorola G99" add it to chosen phones', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.css('#cmbCellPhones>option:nth-child(1)')).click();
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('rightBtn')).click();
        });
        it('should check if "Motorola G99" was added to chosen phones', async () => {
            await driver.sleep(sleepTime);
            let chosenCellPhones = await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(1)')).getAttribute("value");
            chosenCellPhones.should.eql('Motorola G99');
        });
        it('should check if the "Total Price" is set to 1450 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 1450 DKK');
        });

        // Add "iPhone 99"
        it('should click on "iPhone 99" add it to chosen phones', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.css('#cmbCellPhones>option:nth-child(2)')).click();
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('rightBtn')).click();
        });
        it('should check if "iPhone 99" was added to chosen phones', async () => {
            await driver.sleep(sleepTime);
            let chosenCellPhones = await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(2)')).getAttribute("value");
            chosenCellPhones.should.eql('iPhone 99');
        });
        it('should check if the "Total Price" is set to 7450 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 7450 DKK');
        });

        // Add "Samsung Galaxy 99"
        it('should click on "Samsung Galaxy 99" add it to chosen phones', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.css('#cmbCellPhones>option:nth-child(3)')).click();
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('rightBtn')).click();
        });
        it('should check if "Samsung Galaxy 99" was added to chosen phones', async () => {
            await driver.sleep(sleepTime);
            let chosenCellPhones = await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(3)')).getAttribute("value");
            chosenCellPhones.should.eql('Samsung Galaxy 99');
        });
        it('should check if the "Total Price" is set to 8450 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 8450 DKK');
        });

        // Add "Sony Xperia 99"
        it('should click on "Sony Xperia 99" add it to chosen phones', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.css('#cmbCellPhones>option:nth-child(4)')).click();
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('rightBtn')).click();
        });
        it('should check if "Sony Xperia 99" was added to chosen phones', async () => {
            await driver.sleep(sleepTime);
            let chosenCellPhones = await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(4)')).getAttribute("value");
            chosenCellPhones.should.eql('Sony Xperia 99');
        });
        it('should check if the "Total Price" is set to 9350 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 9350 DKK');
        });

        // Add "Huawei 99"
        it('should click on "Huawei 99" add it to chosen phones', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.css('#cmbCellPhones>option:nth-child(5)')).click();
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('rightBtn')).click();
        });
        it('should check if "Huawei 99" was added to chosen phones', async () => {
            await driver.sleep(sleepTime);
            let chosenCellPhones = await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(5)')).getAttribute("value");
            chosenCellPhones.should.eql('Huawei 99');
        });
        it('should check if the "Total Price" is set to 10250 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 10250 DKK');
        });

        // Remove "Motorola G99"
        it('should remove "Motorola G99" from chosen phones', async () => {
            await driver.sleep(sleepTime + 200);
            await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(1)')).click();
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('leftBtn')).click();
        });
        it('should check if "Motorola G99" was remove from chosen phones', async () => {
            await driver.sleep(sleepTime);
            let numberOfPhoneLines = await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(1)')).getAttribute("value");
            numberOfPhoneLines.should.not.eql('Motorola G99');
        });
        it('should check if the "Total Price" is set to 9450 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 9450 DKK');
        });

        // Remove "iPhone 99"
        it('should remove "iPhone 99" from chosen phones', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(1)')).click();
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('leftBtn')).click();
        });
        it('should check if "iPhone 99" was remove from chosen phones', async () => {
            await driver.sleep(sleepTime);
            let numberOfPhoneLines = await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(1)')).getAttribute("value");
            numberOfPhoneLines.should.not.eql('iPhone 99');
        });
        it('should check if the "Total Price" is set to 3450 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 3450 DKK');
        });

        // Remove "Samsung Galaxy 99"
        it('should remove "Samsung Galaxy 99" from chosen phones', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(1)')).click();
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('leftBtn')).click();
        });
        it('should check if "Samsung Galaxy 99" was remove from chosen phones', async () => {
            await driver.sleep(sleepTime);
            let numberOfPhoneLines = await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(1)')).getAttribute("value");
            numberOfPhoneLines.should.not.eql('Samsung Galaxy 99');
        });
        it('should check if the "Total Price" is set to 2450 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 2450 DKK');
        });

        // Remove "Sony Xperia 99"
        it('should remove "Sony Xperia 99" from chosen phones', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(1)')).click();
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('leftBtn')).click();
        });
        it('should check if "Sony Xperia 99" was remove from chosen phones', async () => {
            await driver.sleep(sleepTime);
            let numberOfPhoneLines = await driver.findElement(By.css('#txtChosenCellPhones>option:nth-child(1)')).getAttribute("value");
            numberOfPhoneLines.should.not.eql('Sony Xperia 99');
        });
        it('should check if the "Total Price" is set to 1550 DKK', async () => {
            await driver.sleep(sleepTime);
            let totalPrice = await driver.findElement(By.id("price")).getText();
            totalPrice.should.eql('Total price: 1550 DKK');
        });
    });

    describe('Test the Buying functionality', () => {
        it('should click the "Buy" button', async () => {
            await driver.sleep(sleepTime + 200);
            await driver.findElement(By.id('buyBtn')).click();
        });
        it('should check if the Receipt is shows as an Alert', async () => {
            await driver.sleep(sleepTime);
            let alert = await driver.switchTo().alert();
            let alertText = await alert.getText();
            alertText.should.eql('You have selected: \n ' +
                                    '• 1x Internet connection\n ' +
                                    '• 3x Phone lines\n ' +
                                    '• 1x Huawei 99\n' +
                                    'Total price: 1550\n');
            await driver.sleep(sleepTime + 1500);
            await alert.accept();
            await driver.sleep(sleepTime + 1000);
        });
    });
    describe('Test the Page closing functionality', () => {
        it('should close the Web Page', async () => {
            await driver.sleep(sleepTime);
            await driver.quit();
        });
    });
});

