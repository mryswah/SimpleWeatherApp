var app = angular.module('weatherApp', []);

app.controller('weatherAppController', function ($scope, $http, Geolocation, Forecast) {
	$scope.countrycode = "";
	$scope.zipcode = "";
	$scope.hasWeather = false;
	
	$scope.getWeather = function () {
		Geolocation.get($scope.zipcode, $scope.countrycode, function (data) {
			if (data && !data?.error) {
				$scope.address = data.display_name;
				$scope.latitude = data.lat;
				$scope.longitude = data.lon;
				Forecast.get($scope.latitude, $scope.longitude, function (data) {
					if (data && !data?.error && data.status_code!="429") {
						$scope.forecast = data;
						$scope.hasWeather = true;
					} else {
						showErrorPopover("Unable to retrieve weather forecast");
					}
				});
			}
			else {
				showErrorPopover("Please enter a valid Country Code and/or Postal/Zip Code");
			}
		});
		$scope.countrycode = "";
		$scope.zipcode = "";
	};

	$scope.showWeather = function () {
		return $scope.hasWeather;
	};

	//Show or hide popover message
	$scope.popover = {
		showPopover: function () {
			$('#user-input').popover('show');
		},
		hidePopover: function () {
			$('#user-input').popover('hide');
		}
	};

	function showErrorPopover(message) {
		$("#user-input").popover({
			content: message,
			placement: "bottom",
			html: true,
			trigger: "manual"
		});
		$scope.popover.showPopover();
	}

	//Get the icon for the current weather
	$scope.getIcon = function (code) {
		if (code != null) {
			return "app/images/" + code + ".png";
		}
		return "";
	};

	$scope.getWeatherDescription = function (code, description) {
		switch (String(code)) {
			case "200":
			case "201":
			case "202":
			case "230":
			case "231":
			case "232":
			case "233":
				return "Thunderstorm";
			case "300":
			case "301":
			case "302":
				return "Drizzle";
			case "500":
			case "501":
			case "502":
			case "511":
			case "520":
			case "521":
			case "522":
				return "Rain";
			case "600":
			case "601":
			case "602":
			case "610":
			case "611":
			case "612":
			case "621":
			case "622":
			case "623":
				return "Snow";
			case "700":
			case "711":
			case "721":
			case "731":
			case "741":
			case "751":
			case "900":
				return description;
			case "800":
				return "Clear";
			case "801":
			case "802":
			case "803":
			case "804":
				return "Clouds";
			default:
				return "";
		}
	};

	$scope.getWindSpeedKmPerH = function (windSpeed) {
		return (windSpeed/1000*60*60);
	};
});