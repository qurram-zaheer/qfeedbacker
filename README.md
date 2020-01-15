# qfeedbacker
Feedback survey and collection webapp, powered by Stripe and SendGrid

qFeedbacker is a webapp that sends out batch survey emails, with integrated webhooks to collect the survey data. To get started, you need to login using Google OAuth, and create a survey to send out. 

## Stack: 
-MongoDB (via Mongoose) for database to store the webapp users and their surveys,<br>
-Express for the backend, powered by Passport.js for Google OAuth<br>
-SendGrid for sending out emails and integrating webhooks<br>
-Stripe to facilitate payments<br>
-Redux and Redux form to manage frontend states and survey form states respectively<br>
-React.js for frontend of the webapp

       
       
