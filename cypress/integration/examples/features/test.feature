Feature: End to End Ecommerce Validation

Scenario: Login to Swag Labs
Given I am on Swag Labs Page
When I login to the application
And I add items to cart and checkout
And I provide my name and address details
And I see the overview and confirm
Then I see the thank you page