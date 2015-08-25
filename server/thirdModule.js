/**
 * Created by Shawn on 8/25/15.
 */

var first = require('./firstModule');
var second = require('./secondModule');
// third module requires 1st and 2nd, has 2 exports: 1st - return firstModule passed into secondModule. 2nd - return
// text "Account balance: <$$>\n"
var thirdModule = {
	first : function () {
		// call first module, pass in min, max
		return second.convertNum(first.randomNum(100, 1000000));
	},
	second : function () {
		return "Account balance: "+ this.first() +"\n";
	}
};

module.exports = thirdModule;