const { Given, When, Then } = require('@cucumber/cucumber');
const { Request } = require('../../../src/functions/function-request');
const assert = require('assert');
let response = {}

Given('I look for the employee information by visiting {string} using employee id {string}', async (url, employeeId) => {
    // Write code here that turns the phrase above into concrete actions
    const result = await Request(`${url}?employeeId=${employeeId}`, 'GET');
    response.status = result.res.statusCode;
    response.body = result.body;
    response.err = result.err;
    return response;
});

Then('I should get a successful response of {string}', (statusCode) => {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(response.status, statusCode);
});

// Still Thinking how to do!
Then('the response should give employee information', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should get a {string} response', function (statusCode) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(response.status, statusCode);
});