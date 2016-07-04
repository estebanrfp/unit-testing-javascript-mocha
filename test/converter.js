var expect = require('chai').expect;
var converter = require('..');

describe('Temperature Conversor', function(){

	describe('Celsius to Fahrenheit conversion', function(){

		it('converts 100c to Fhrenheit', function(){
			var fh = converter.toFahrenheit(100);
			expect(fh).to.equal(212)
		})
	})
	describe('Celsius to Fahrenheit conversion', function(){

		it('converts 100c to Fhrenheit', function(){
			var fh = converter.toCelsius(212);
			expect(fh).to.equal(100)
		})
	})
})