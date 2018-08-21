Feature: Verifying the functionality of Create password using the email link.
    @CucumberScenario
    Scenario Outline: Verifying the functionality of Create Password all patterns.
        Given I Redirect to Create password page using given link.
        Then Verify the Create password page url.
        When Enter "<password>" password in Create Password Field.
        Then Verify the "<pattern>" pattern is not TRUE.
        Then Verify the New Password Button should not be able to click.
          Examples:
            |password                   | pattern       |
            |DEmo1234                   | Special char  |
            |DEmo@email                 | Numeric       |
            |DEMO@123                   | Mix char      |
            |demo@123                   | Mix char      |
            |dEmO@1                     | Min length    |
            |DeMo@11111111111111111111  | Max length    |