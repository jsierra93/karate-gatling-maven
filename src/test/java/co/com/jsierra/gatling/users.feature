Feature: Users info

  Background:
    * url 'https://api-payment.getsandbox.com:443'

  @name=getUsers
  Scenario: Testing get users 1
    Given path 'users'
    When method GET
    Then status 200
    And match response == [{"username":"demopostman"}]

  @name=getUserId
  Scenario: Testing get user find username
    Given path 'users/demopostman'
    When method GET
    Then status 200
    And match response == {"username":"demopostman"}