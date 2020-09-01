var {Then} = require('cucumber');
var {When} = require('cucumber');
var {Given} = require('cucumber');
const expectChai = require('chai').expect;

Given(/^I am on the homepage$/, function () {
    browser.url('/index.php')
    expect(browser).toHaveTitle('My Store');
});
Given(/^I click the sign in link$/, function () {
    $('a.login').click();
});
Given(/^I enter email "([^"]*)" in the email field$/, function (myemail) {
    const myEmail = $('#email')
    myEmail.setValue(myemail);
});
Given(/^I enter password "([^"]*)" in the password field$/, function (mypassword) {
    const myPassword = $('#passwd')
    myPassword.setValue(mypassword);
});
When(/^I click the login button$/, function () {
    const signInBtn = $('#SubmitLogin')
    signInBtn.click();
    browser.pause(1000)
});
Then(/^I verify "([^"]*)" is on the page$/, function (actual_name) {
    const userInfo = expect( $('span')).toHaveTextContaining(actual_name);
    expectChai(actual_name,userInfo )
    console.log(userInfo);

});
Then(/^I sign out$/, function () {
    const signOut = $('#header > div.nav > div > div > nav > div:nth-child(2) > a')
    signOut.click();
});
