As a User
I want to be able to enter my credentials or access to create my account
So that customers can access my MAPFRE Online account, Policy information & services

**Scenario: Customer enters a correct email and password**
Given: a user navigates to the login page in any supported browser (Chrome, Firefox, IE11, Safari 11)
When: a Customer enters a correct email and password combination
And: the submit button activates
And: the user clicks on the submit button
Then: the customer is redirected to the dashboard

**Scenario: Customer enters an incorrect email or password**
Given: a user navigates to the login page in any supported browser (Chrome, Firefox, IE11, Safari 11)
When: a Customer enters an incorrect combination of email or password 
And: the submit button activates
And: the user clicks on the submit button
Then: a login failure message is presented to the Customer
And: data user entered remains populated
And: the submit button is deactivated until user modifies one of the 2 fields

**Scenario: Customer enters an incorrect email format**
Given: a user navigates to the login page in any supported browser (Chrome, Firefox, IE11, Safari 11)
When: a Customer enters an incorrect email format 
And: leaves the email input field (lost focus)
Then: an inline error with "incorrect email format" is displayed under the input.

**Scenario: Clicks create an account**
Given: a user navigates to the login page in any supported browser (Chrome, Firefox, IE11, Safari 11)
When: a Customer Clicks on "create account"
Then: the customer is redirected to create account screen

**Scenario: Clicks forgot password**
Given: a user navigates to the login page in any supported browser (Chrome, Firefox, IE11, Safari 11)
When: a Customer Clicks on "forgot your password"
Then: the customer is redirected to forgot a password screen