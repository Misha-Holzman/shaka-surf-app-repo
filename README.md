# SHAKA Surf Report

## GA–WDI–Project 4

Created by: Misha Holzman

<h3>Surfs up! Welcome to Shaka, an easy to use surf report website for the everyday surfer. Easily enter your zipcode and view the necessary surf conditions for your specific area. If you are interested in exporting new locations around the world to surf, view some of the best locations for the best waves in exciting locations. To plan out a trip to the water when the weather is the best, view a weather map to see the weather forcast for the future (coming soon). Interesting in getting stoked on some cool pictures and video? View media from some of the most talented photographers and artists in the world.</h3>

### My General Approach:

Using React on Rails as my framework, I started by created a database for users and user authentication in Ruby. Once the Ruby backend was functioning properly in Postman and a token was given to a user when proper login info was provided, I wired the user authentication up to a login and signup form. Next, I set up Twilio messeging service to the app to send an SMS to a user's cellphone number provided on signup. The Twilio SMS was then connected to cron-jobs to have a message sent during weekend in the morning.

It was then time to start the front-end! I started by laying out the website into multiple components. Starting with the Navbar component, I integrated links to different sections, a custom logo, and the login/logout form. The login/logout form required the use of state in order to log the user in when a authentication token was generated, store that token in local storage to keep the user logged in until the token expires, and log the user out when the token no longer exists. The next component, and the most complex component, I built was the main homepage where the surf report would be visible. The API I needed to query that contained the real-time surf conditions only accepted a longitude and latitude to choose your location. To allow the user to enter a zipcode for their location, I had to take the user's zipcode, send it to an alternate API and fetch a longitude latitude for that specific zipcode. The returned lat/long was then used to fetch the necessary data from the surf conditions API. A ternary statement was used to render the surf report only if data was successfully fetched from the API. The app also asks the user when he/she first travels to the website, if they would like to use their current location. If 'yes' is entered, a surf report will be returned for the users immediate location. When a new zipcode is entered into the search bar, that zipcode is then stored in state, sent through the 2 API's, and a new surf report for that location is rendered for the user.

The last part of my process was creating a visually engaging experience through extencive use of CSS and CSS frameworks, such as Bulma and Bloomer. I used flex-box and my skills in photoshop to completely personalize the user experience with a creative touch.


### Future Upgrades:

1. I plan on incorporating a personalized experience for the user upon signup. By asking the user for their experience level, beginner, intermediate, or advanced, the application with return catered information and data based on that experience level.
2. A forcast map to view future weather patters for a specific zipcode.
3. Show the nearest beach for the zipcode entered.
4. A place to view more exciting media about surfing and surf culture.
5. A place to save favorite surf spots for each user.
---

<!-- ### Wireframe:

<img src="artifacts/Wireframe.jpg" alt="Wireframe"/>

### ERD:

<img src="artifacts/Fooder_App_ERD.png" alt="ERD"/>
 -->
### Link to Deloyed Site via Heroku: https://shaka-app.herokuapp.com/
<!--
<a href="https://www.cookinglight.com/weeknight-meal-planner">Link to similar website</a>

<h4>Technologies used: Express, JSX, Sequelize, React, Node.js, CSS</h4>

<a href="https://git.generalassemb.ly/mholzman/Fooder_Project2">Link to Source Code</a> -->
