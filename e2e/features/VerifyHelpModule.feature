Feature: Verifying the functionality of Help Module all contents
	
	Scenario: Verify the Call Us link and Email Us on help module.
		Given Navigate to Landing Page of MAPFRE.
		Then Verify The Login Page.
		When Click On Help Menu On Header.
		Then Verify The Help Menu Page.
		Then Verify The Call Us - "884-499-3403"
		Then Verify The Email Us - "consumerportal@mapfreusa.com"
		When Click on Close button of Help Menu.
		Then Verify The Help Menu Page after close.
		Then Verify The Login Page.
		When Click on Language Change Module.
		Then Verify The Language Change Page.
		When Click on "english" radio button.
		Then Click on Confirm Language Button.

	Scenario: Verify the login module text after switch the language.
		When Get the set value from the footer language module.
		Then Verify the Customer Access text according to selected language.
		Then Verify the Email text according to selected language.
		Then Verify the Password text according to selected language.
		Then Verify the Remember Me text according to selected language.
		Then Verify the Forgot Password text according to selected language.
		Then Verify the Submit Button text according to selected language.
		Then Verify the Create account text according to selected language.
		Then Verify the Footer Copy Right text according to selected language.
	
	Scenario: Verify the login module text after switch the language.
		When Click On Help Menu On Header.
		Then Verify the Help Title text according to selected language.
		Then Verify the Help Description text according to selected language.
		Then Verify the Trouble Shoot Title text according to selected language.
		Then Verify the Trouble Shoot Description text according to selected language.
		Then Verify the Call Us Titile text according to selected language.
		Then Verify the Email Us Title text according to selected language.