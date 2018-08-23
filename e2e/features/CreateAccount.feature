Feature: Verifying the functionality of Create account link and Verifying module with valid/invalid data.
	
	Scenario: Verifying the functionality of Create account link on Landing page and with invalid email type of MAPFRE.
		Given Navigate to Landing Page of MAPFRE.
		Then Verify The Login Page.
		Given Navigate to Create Account Page of MAPFRE.

	
	Scenario Outline: Verifying the functionality of Create account link on Landing page and with invalid email type of MAPFRE.
		Then Verify The Create Account Page.
		When Enter email "<email>" in your email field.
		When Enter password "<password>" in your password field.
		Then Verify the create email to be success - "Wrong"
		Then Verify the email required message - "Please Enter A Valid Email"
		When Enter confirm password "<cPassword>" in your confirm password field.
		When Click on Register Button.
		Then Verify the account create success message - "<Error Message>"
		Examples:
	    		|email	 			 |password   	 |cPassword  	|Error Message	  		 |
	    		|demo@gmail          |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de@mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |demo                |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |.demo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |demo.@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de..mo@gmail.com    |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |_demo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |demo_@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de__mo@gmail.com    |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de~mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de!mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de#mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de$mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de%mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de^mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de*mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de(mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de)mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de-mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de+mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de=mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
	            |de`mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de\mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de[mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de]mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de{mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de}mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de'mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de"mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de:mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de;mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de/mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de?mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de>mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de<mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|
				|de,mo@gmail.com     |DeMo@123       | DeMo@123     |Please Enter A Valid Email|

	
    Scenario Outline: Verifying the functionality of Create account link with different password.
		Given Navigate to Create Account Page of MAPFRE.
		Then Verify The Create Account Page.
		When Enter email "demo@mapfre.com" in your email field.
		Then Verify the create email to be success - "Wrong"
		When Enter password "12345678" in your password field.
		When Enter confirm password "55485485" in your confirm password field.
		When Click on Register Button.
		Then Verify the account create success message - "Password didn't match."

	
	Scenario Outline: Verifying the functionality of password field with minimum and maximum value.
		Given Navigate to Create Account Page of MAPFRE.
		Then Verify The Create Account Page.
		When Enter email "<email>" in your email field.
		Then Verify the create email to be success - "Wrong"
		When Enter password "<password>" in your password field.
		When Enter confirm password "<cPassword>" in your confirm password field.
		When Click on Register Button.
		Then Verify the account create success message - "<Error Message>"
		Examples:
	    		|email	 			 |password    |cPassword  |Error Message	  		 		 |
	    		|demo@mapfre.com     |adm         | admin     |Password should be 6-32 character.|
	            |demo@mapfre.com     |admin       | adm       |Password should be 6-32 character.|
	            |demo@mapfre.com     |adminfda... | admin.....|Password should be 6-32 character.|
	            |demo@mapfre.com     |admin       | admin     |Password should be 6-32 character.|
	
	
    Scenario Outline: Verifying the functionality of Create account link with different password.
		Given Navigate to Create Account Page of MAPFRE.
		Then Verify The Create Account Page.
		When Enter email "demo@mapfre.com" in your email field.
		Then Verify the create email to be success - "Wrong"
		When Enter password "12345678" in your password field.
		When Enter confirm password "55485485" in your confirm password field.
		When Click on Register Button.
		Then Verify the account create success message - "Password didn't match."	