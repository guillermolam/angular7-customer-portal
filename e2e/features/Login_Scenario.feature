Feature: Verifying the functionality of Login to the application.
  Scenario: Navigation on landing page.
    Given Navigate to Landing Page of MAPFRE.
    Then Verify The Login Page.
  
  @CucumberScenario
	Scenario Outline: Verifying the functionality of login feature with invalid data.  
	  When I enter "<email>" in email field.
	  When I enter "<password>" in password field.
	  Then Verify the Error message - "<Error Message>"
		Examples:
        		|email	 			       |password  |Error Message	  		   |
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
	
  @CucumberScenario
	Scenario Outline: Verifying the functionality of login feature with valid data.
	  When I enter "<email>" in email field.
	  When I enter "<password>" in password field.
	  When Click on Submit Button.
	  Then Verify the Dashboard.
		Examples:
        		 |email	 				        |password	|Status								|
        		 |user@mapfre.com		    |admin		|Should be able to Login to mapfre	|
        		 |USER@MAPFRE.COM		    |admin		|Should be able to Login to mapfre	|
        		 |will@mapfre99.com     |admin		|Should be able to Login to mapfre	|
             |wi.l.l@mapfre.com     |admin		|Should be able to Login to mapfre	|
             |wi_l_l@mapfre.com     |admin		|Should be able to Login to mapfre	|
             |will@gmail.com        |admin		|Should be able to Login to mapfre	|
             |will@mapfre.gov.in    |admin		|Should be able to Login to mapfre	|
             |will@map-fre.com      |admin		|Should be able to Login to mapfre	|

  @CucumberScenario
  Scenario: Verifying the functionality of Login with Remember me feature.
    Then Verify The Login Page.
    When I enter "user@mapfre.com" in email field.
    When I enter "DeMo@123" in password field.
    When I click on remember me toggle.
    When Click on Submit Button.
  
  @CucumberScenario
  Scenario: Verify the logged user should be set to email by default after launching the feature.
    Then Verify The Login Page.