
exports.min = function min (array) {
	return array && array.length ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  	return array && array.length ? Math.max.apply(null, array) : 0;
}

exports.avg = function avg (array) {
	const sum = array ? array.reduce((a, b) => a + b, 0) : 0;
	const avg =  array ? (sum / array.length) : 0;
	return array && array.length ? avg : 0;
}
