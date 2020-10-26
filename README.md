# trail_bot

trail_bot is a tool that was made for use by through-hikers of the Appalachian Trail. When a SMS message containing a trail-shelter is sent to ###-###-####, the bot responds with the current weather data and a three-day forecast for that shelter.

The bot bypasses the need for hikers to have internet connection by relying on the mobile network rather than the less consistent internet connection. 
When a users sends a text message it is recieved by a Twilio API, which then sends trail_bot an HTTP POST request. trail_bot queries the user's message against a MongoDB database containing longitude and latitude data along the trail.
