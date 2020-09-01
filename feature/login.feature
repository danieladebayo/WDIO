Feature: Login

  Scenario Outline:Login As a user
    Given I am on the homepage
    And I click the sign in link
    And I enter email "<myemail>" in the email field
    And I enter password "<mypassword>" in the password field
    When I click the login button
    Then I verify "<actual_name>" is on the page
    And I sign out

    Examples:
      | myemail               | mypassword    | actual_name |
      |mathew@mail.com   |InteliJ1       |Mathew Bible |
      |mark@mail.com	  |InteliJ2	      |Mark Bible   |
      |luke@mail.com	  |InteliJ3       |Luke Bible   |
      |john@mail.com     |InteliJ4       |John Bible   |




