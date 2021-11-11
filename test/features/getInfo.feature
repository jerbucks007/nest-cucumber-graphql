Feature: get employee data!

    This is the information you'll get

    Scenario: the employee exist in the database
        Given I look for the employee information by visiting "http://localhost:3000/rest" using employee id "1235"
        Then I should get a successful response of "200"
        And the response should give employee information

    Scenario: the employee doesn't exist in the database
        Given I look for the employee information by visiting "http://localhost:3000/rest" using employee id "1237"
        Then I should get a "404" response