Feature: Performing a Login and go to messages

    Background: 
        Given I'm on the login page

    Scenario: Login with a default user
        When I log in with a default user
        Then I click on "Notifications"