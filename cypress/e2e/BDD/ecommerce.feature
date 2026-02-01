Feature: End to End Ecommerce Validation

  Scenario: Ecommerce products delivery
    Given I am on the ecommerce page
    When I login to the application
    And I add items to cart and checkout
    And Validate the total price
    Then Select the country submit and verify Thank you