Feature: Verifying the functionality of Create password using the email link.
    @CucumberScenario
    Scenario: Verifying the functionality of Create Password all patterns.
        Given Navigate to Landing Page of MAPFRE.
        Then Verify The Login Page.
        Given I Redirect to Create password page using given link.

    @CucumberScenario
    Scenario Outline: Verifying the functionality of Create Password all patterns.
        Then Verify the Create password page url.
        When Enter "<password>" password in Create Password Field.
        When Click on Password Show icon.
        Then Verify Enter Password is in visible mode.
        When Click on Password Show icon.
        Then Verify Enter Password isn't in visible mode.
        Then Verify the "<pattern>" pattern is not TRUE.
        Then Verify the New Password Button should not clickable.
          Examples:
            |password                   |pattern                                            |
            |DEmo1234                   | Have at least 1 special character (like @,!,$)    |
            |DEmo@email                 | Have at least 1 number                            |
            |DEMO@123                   | Be a mix of lowercase & uppercase letters         |
            |demo@123                   | Be a mix of lowercase & uppercase letters         |
            |dEmO@1                     | Be at least 7 characters long                     |
            |DeMo@11111111111111111111  | At the most 24 characters long                    |

    
    Scenario Outline: Verifying the functionality of Create Password with valid patterns.
        Then Verify the Create password page url.
        When Enter "DEmo@123" password in Create Password Field.
        When Click on New Password button.
        Then Verify the password reset success message - "".

    @CucumberScenario
    Scenario: Verifying the functionality of Create Password link after create the pasword.
        Then Verify the Create password page url.
        Then Verify the Link Expired message title after reset the password.
        When Click on Request A New Link button.
        Then Verify The Forgot Password Page.

    @CucumberScenario
    Scenario: Verifying the functionality of Create Password link after create the pasword.
        Given I Redirect to Create password page using given link.
        Then Verify the Create password page url.
        Then Verify the Link Expired message title after reset the password.
        When Click on Login Link button on expired link page.
        Then Verify The Forgot Password Page.