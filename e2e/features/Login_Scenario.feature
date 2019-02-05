Feature: Verifying the functionality of Login to the application.
  
  @test
  Scenario: Navigation on landing page.
    Given Navigate to Landing Page of MAPFRE.
    Then Verify The Login Page.
  
  @test
	Scenario Outline: Verifying the functionality of login feature with invalid data.  
	  When I enter "<email>" in email field.
	  When I enter "<password>" in password field.
	  Then Verify the Error message - "<Error Message>"
		Examples:
          |email               |password  |Error Message             |
          |demo@gmail          |admin     |Please Enter A Valid Email|
          |de@mo@gmail.com     |admin     |Please Enter A Valid Email|
          |demo                |admin     |Please Enter A Valid Email|
          |.demo@gmail.com     |admin     |Please Enter A Valid Email|
          |demo.@gmail.com     |admin     |Please Enter A Valid Email|
          |de..mo@gmail.com    |admin     |Please Enter A Valid Email|
          |_demo@gmail.com     |admin     |Please Enter A Valid Email|
          |demo_@gmail.com     |admin     |Please Enter A Valid Email|
          |de__mo@gmail.com    |admin     |Please Enter A Valid Email|
          |de~mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de!mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de#mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de$mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de%mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de^mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de*mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de(mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de)mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de-mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de+mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de=mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de`mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de\mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de[mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de]mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de{mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de}mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de'mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de"mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de:mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de;mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de/mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de?mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de>mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de<mo@gmail.com     |admin     |Please Enter A Valid Email|
          |de,mo@gmail.com     |admin     |Please Enter A Valid Email|
	
  @CucumberScenario
	Scenario Outline: Verifying the functionality of login feature with valid data.
	  When I enter "<email>" in email field.
	  When I enter "<password>" in password field.
	  When Click on Submit Button.
	  Then Verify Invalid Email/Password - "<Error Message>".
		Examples:
        	|email	 			         |password|Error Message         	|
        	|user@mapfre.com       |admin		|Invalid Email/Password	|
        	|USER@MAPFRE.COM	     |admin		|Invalid Email/Password	|
        	|will@mapfre99.com     |admin		|Invalid Email/Password	|
          |wi.l.l@mapfre.com     |admin		|Invalid Email/Password	|
          |wi_l_l@mapfre.com     |admin		|Invalid Email/Password	|
          |will@gmail.com        |admin		|Invalid Email/Password	|
          |will@mapfre.gov.in    |admin		|Invalid Email/Password	|
          |will@map-fre.com      |admin		|Invalid Email/Password	|

  @CucumberScenario
  Scenario: Verifying the functionality of Login with Remember me feature.
    Then Verify The Login Page.
    When I enter "onlyfore2e@test.com" in email field.
    When I enter "Test@123" in password field.
    When I click on remember me toggle.
    When Click on Submit Button.
    Then Navigate to Dashboard.
  
  @CucumberScenario
  Scenario: Verify the Forgot Password link.
  When I click on Forgot Password
  And Email field has valid address
  Then Redirect to forgotpassword page with prefilled email
