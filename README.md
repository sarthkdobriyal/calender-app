# A Calender-app created using reactjs

Functionalities -> 
- login/signup using email and password 
- logout functionality
- Display all the events on the calendar 
- Easy to keep track of all your events
- Add events to the calender with precise timings
- Delete events from the calender
- View events in a easy to understand manner
- Edit events whenever necessary
- Great UI easy to use 

Technology used --> 
- react-big-calendar for displaying the calender 
- react-datepicker to choose date and time of the event to add 
- Context API for the state management 
- Authentication using email and password powered by Google Firebase 
- SCSS for the styling 
 
Steps to use the app -->
- The very first page is the sign up page to register with an account. 
- Enter the name, email and password then click on sign up to be redirected to the main page 
- If you already have an account click on the Login link below the sign up button then enter email and password and click on login 
- On the main the page  
    - A calender is shown (By default three events are already added) 
    - To add a new event, click on the greeen colored button saying add a new event. 
    - A modal with fields to enter details of the event shows up 
    - Enter the details and click on the add event button 
    - The event will be displayed on the calendar 
    - Click on the green button saying show all events to view all the events
    - All the events with all the details are then displayed on screen on a modal
    - Use the delete button to delete any event.
    - Click on the edit button to edit any event and then add the event.
    - Use the next and prev button to change months
    - Click on the week tab to view meetings and events for the week
    - Click the Day tab to view meetings for the day
    - To view all the meetings and events ordered by time click on agenda tab
    - To go back to the  present day click on Today tab
    - Finally click on the logout button with red color to log out of the app and be redirected to the signup/login page

In development-->

- Adding firestore database from firebase to store all the meetings in the cloud for each user and fetch them when the user logs in
- Adding more methods of authentication using google authentication
- Adding a reminder functionality to remind of upcoming meetings using email or sms


