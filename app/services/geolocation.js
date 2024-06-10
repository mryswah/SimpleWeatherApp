angular.module('weatherApp').factory('Geolocation', function ($http) {
	var Geolocation = {};
	var URL_ADDRESS = "https://nominatim.openstreetmap.org/search?";
	Geolocation.get = function (location, country, callback) {
		$http({
			method: "GET",
			url: URL_ADDRESS,
			params: {
				postalcode: location,
				country: country,
				format: "json",
				limit: "1"
			}
		}).then(function (response) {
			callback(response.data[0]);
		}, function (error) {
			console.error('Error:', error.status, error.data);
			callback(error.data)
		});
	};
	return Geolocation;
});