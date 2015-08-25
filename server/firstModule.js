/**
 * Created by Shawn on 8/25/15.
 */
// first module - takes in min and max and returns a random number
var firstModule = {
	randomNum : function (min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}
};

module.exports = firstModule;