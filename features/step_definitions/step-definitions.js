const {Given, When, Then } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");

  Given('I\'m on the login page', function (callback) {
    this.driver.get("https://www.linkedin.com/");
    callback();
  });
  When('I log in with a default user', function (callback) {
    this.driver.findElement({xpath: "//*[@id='session_key']"}).sendKeys('useremail');
    this.driver.findElement({xpath: "//*[@id='session_password']"}).sendKeys('password');
    this.driver.findElement({xpath: "//*[@type='submit']"}).click();
    callback();
  });
  Then('I click on {string}', function (text) {
    return this.driver.findElement(By.id("ember28")).findElement(By.tagName("li")[4].click()); 
   
    
   
  });
   



