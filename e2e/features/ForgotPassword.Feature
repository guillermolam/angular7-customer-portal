Feature: Verifying the functionality of Forgot Password Link on landing page and module with valid/invalid data.
	@CucumberScenario
	Scenario: Verifying the functionality of Forgot Password link on landing page of MAPFRE with prefilled email.
	  Given Navigate to Landing Page of MAPFRE.
	  Then Verify The Login Page.
	  When I enter "demo@mapfre.com" in email field.
	  When Click on Forgot Password link.
	  Then Verify The Forgot Password Page.
	  Then Verify prefiled email id -"demo@mapfre.com".
	
	@CucumberScenario
	Scenario Outline: Verifying the functionality of Forgot Password page send email field with invalid Email.
	  When Enter reset password email "<Email>" In email field.
	  When Click on Send Email Button.
	  Then Verify the Error message - "<Error Message>"
	   Examples:
		|Email	 			 |Error Message	  		    |
		|demo@gmail          |Please Enter A Valid Email|
        |de@mo@gmail.com     |Please Enter A Valid Email|
        |demo                |Please Enter A Valid Email|
        |.demo@gmail.com     |Please Enter A Valid Email|
        |demo.@gmail.com     |Please Enter A Valid Email|
        |de..mo@gmail.com    |Please Enter A Valid Email|
        |_demo@gmail.com     |Please Enter A Valid Email|
        |demo_@gmail.com     |Please Enter A Valid Email|
        |de__mo@gmail.com    |Please Enter A Valid Email|
        |de~mo@gmail.com     |Please Enter A Valid Email|
        |de!mo@gmail.com     |Please Enter A Valid Email|
        |de#mo@gmail.com     |Please Enter A Valid Email|
        |de$mo@gmail.com     |Please Enter A Valid Email|
        |de%mo@gmail.com     |Please Enter A Valid Email|
        |de^mo@gmail.com     |Please Enter A Valid Email|
        |de*mo@gmail.com     |Please Enter A Valid Email|
        |de(mo@gmail.com     |Please Enter A Valid Email|
        |de)mo@gmail.com     |Please Enter A Valid Email|
        |de-mo@gmail.com     |Please Enter A Valid Email|
        |de+mo@gmail.com     |Please Enter A Valid Email|
        |de=mo@gmail.com     |Please Enter A Valid Email|
    
    @CucumberScenario
    Scenario Outline: Verifying the functionality of Forgot Password page send email field with valid email and active email.
	  Then Verify The Forgot Password Page.
	  When Enter reset password email "<email>" In email field.
	  And Click on Send Email Button.
	  Then Verify the Success message - "<Success Massage>"
	  Examples:
	  	 |email					|Success Massage								|
	 	 |user@mapfre.com		|Reset Password link has been send in your mail.|
		 |USER@MAPFRE.COM		|Reset Password link has been send in your mail.|
		 |will@mapfre99.com     |Reset Password link has been send in your mail.|
         |wi.l.l@mapfre.com   	|Reset Password link has been send in your mail.|
         |wi_l_l@mapfre.com   	|Reset Password link has been send in your mail.|
         |will@gmail.com        |Reset Password link has been send in your mail.|
         |will@mapfre.gov.in  	|Reset Password link has been send in your mail.|
         |will@map-fre.com    	|Reset Password link has been send in your mail.|
    
    @CucumberScenario
    Scenario: Verifying the functionality of Forgot Password module with valid email and Non-Existing in MAPFRE.
	  Then Verify The Forgot Password Page.
	  When Enter reset password email "User.demo@gmail.com" In email field.
	  And Click on Send Email Button.
	  Then Verify the Success message - "This Email is not registered with us."
	
	@CucumberScenario
	Scenario: Verifying the functionality of Forgot Password module with Existing user and Deactivated user in MAPFRE.
	  Then Verify The Forgot Password Page.
	  When Enter reset password email "User.demo@gmail.com" In email field.
	  And Click on Send Email Button.
	  Then Verify the Success message - "Your account has been deactivated."