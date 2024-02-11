Feature: User Info functionality

  Scenario: Navigate to user actions screen
    Given I am on the user info screen
    When I click the Actions nav link
    Then I should be redirected to the user actions screen
