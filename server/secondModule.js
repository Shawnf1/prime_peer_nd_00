/**
 * Created by Shawn on 8/25/15.
 */
// second module - takes in a number and formats it to a currency value
var secondModule = {
	convertNum : function (num) {
		return "$"+ num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",");
	}
};

module.exports = secondModule;