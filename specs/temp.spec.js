let assert =  require('assert');
let convert = require("../src/temp.js");

describe('Temperature convention', function(){
  
  describe('cToF', function(){
    it('should convert -40 celsius to -40 fahrenheit', function(){
      assert.strictEqual(-40, cToF(-40));
    });
    it('should convert 0 celsius to 32 fahrenheit', function() {
      assert.strictEqual(32, cToF(0));
    });
    it('should return undefined if no temperature is input', function(){
      assert.strictEqual(undefined, cToF(''));
    });
  });

  describe('fToC', function() {
    it('should convert -40 fahrenheit to -40 celsius', function() {
      assert.strictEqual(-40, convert.fToC(-40));
    });
    it('should convert 32 fahrenheit to 0 celsius', function() {
      assert.strictEqual(0, convert.fToC(32));
    });
    it('should return undefined if no temperature is input', function() {
      assert.strictEqual(undefined, convert.fToC('a'));
    });
  });
});