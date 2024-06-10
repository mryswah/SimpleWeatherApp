angular.module('weatherApp').factory('Forecast', function ($http) {
	var Forecast = {};
	var URL_FORECAST = "http://api.weatherbit.io/v2.0/forecast/daily";
	var API_KEY = "";
	Forecast.get = function (latitude, longitude, callback) {
		$http({
			method: "GET",
			url: URL_FORECAST,
			params: {
				lat: latitude,
				lon: longitude,
				units: "metric",
				key: API_KEY,
				days: "7"
			}
		}).then(function (response) {
			callback(response.data);
		}, function (error) {
			console.error('Error:', error.status, error.data);
			callback(error.data)
		});
	};
	return Forecast;
});