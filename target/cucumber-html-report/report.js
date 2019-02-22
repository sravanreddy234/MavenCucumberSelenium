$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Udemy Website Login",
  "description": "",
  "id": "test-udemy-website-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing with Valid Login Credentials",
  "description": "",
  "id": "test-udemy-website-login;testing-with-valid-login-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open Firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter Valid Credentials",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to Login Succesfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_Firefox()"
});
formatter.result({
  "duration": 41203042487,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.I_enter_Valid_Credentials()"
});
formatter.result({
  "duration": 1263687759,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.User_should_be_able_to_Login_Succesfully()"
});
formatter.result({
  "duration": 5349978803,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});