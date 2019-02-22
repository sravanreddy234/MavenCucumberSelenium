Feature: Test Udemy Website Login

	Scenario: Testing with Valid Login Credentials
	Given Open Firefox
	When I enter Valid Credentials
	Then User should be able to Login Succesfully
	Then Application should be closed