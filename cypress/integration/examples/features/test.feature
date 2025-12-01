Feature: End to End Ecommerce Validation

Background:
Given I am on Swag Labs Page

Scenario: Error User Login
When I login to the application with "locked_out_user"
Then I see an error message

Scenario: Login to Swag Labs
When I login to the application with "standard_user"
And I add item "Sauce Labs Backpack" to cart and checkout
And I provide my name and address details
And I see the overview and confirm
Then I see the thank you page


