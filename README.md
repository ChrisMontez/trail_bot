# trail_bot


:thought_balloon: 
## Background 
Appalachian hikers often find themselves in need of weather data at locations with no access to internet. This application was created to send the hiker their desired data without requiring them to have internet connection. 

## Description
 When a SMS message containing an Appalachian trail-shelter is sent to 256-598-9937, the bot responds with the current weather data and a three-day forecast for that shelter. 



## Progress
This bot leverages Twilio, NodeJs, and MongoDB to bypass the end-users need for internet connection when retrieving weather data. Currently in pre-deployment. Local port is tunneled by ngrok. If message is sent and a response is not recieved, that means I have the tunnel offline.


## Work to be done
* Push to Heroku
* Add any missing shelters to database
* Hide OWID