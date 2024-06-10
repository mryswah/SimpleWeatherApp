# SimpleWeatherApp
## A Simple Weather Forecast App using AngularJS, [Nominatim](https://nominatim.openstreetmap.org/ui/search.html) and [WeatherBit](https://www.weatherbit.io/) API
The app takes a **postal/zip code** as a User Input, and calls **Nominatim API**.
**Nominatim API** will return a JSON response with **Latitude** and **Longitude** which will be used as parameters for **WeatherBit API**.
**WeatherBit API** will return a JSON response with the Weather Forecast information for that given location, which will be populated on the app.

## Nominatim API
API Documentation : https://nominatim.org/release-docs/develop/api/Search/

## WeatherBit API
[API Documentation](https://www.weatherbit.io/api/weather-forecast-16-day)
[Weather Icon Codes and Images](https://www.weatherbit.io/api/codes)

You will need to sign up for an account for the API Key to use the free API(s).
[Sign Up Page](https://www.weatherbit.io/account/create)

## Technology Used : 
* HTML
* CSS
* Boostrap
* AngularJS
* JQuery
* [Nominatim](https://nominatim.openstreetmap.org/ui/search.html)
* [WeatherBit](https://www.weatherbit.io/) API

## Note : 
It is possible for different countries to have postal/zip codes that are similar or even identical.
Thus, searching by the country code might have more accurate locations.

Example : 

Country : **VN**
Postal/Zip Code : **10036**

Country : **US**
Postal/Zip Code : **10036**

