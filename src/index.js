// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	
	let result = {};
	
	if (currency <= 0) {
		return result;
	}

	if (currency > 10000) {
		return {error: "You are rich, my friend! We don't have so much coins for exchange"}
	}

	function calc(x, name) {
		let n = 0;
		n = Math.floor(currency / x);
		if ( n !== 0) {
			result[name] = n;
			currency -= x * n; 
		}
	}

	// 50
	calc(50, 'H');
	// 25
	calc(25, 'Q');
	// 10
	calc(10, 'D');
	// 5
	calc(5, 'N');
	// 1
	calc(1, 'P');

	return result;
}