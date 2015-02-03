'use strict';

var expect = require ("chai").expect;
var greet = require ("../greet");

describe("greetings friend", function() {
  it("should greet the user input", function() {
    expect(greet.greet("Callum")).eql("hello Callum");
  });
});
