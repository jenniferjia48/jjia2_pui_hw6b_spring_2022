# jjia2_pui_hw6b_spring_2022

Explanation of html, css, and js files:
1) index.html: login page
2) appointments.html: all upcoming appointments
3) makeappointment1.html: form to schedule an appointment
4) appointmentdetail1.html: appointment confirmation page
5) results.html: view past appointment results
6) style.css: styling for site
7) main.js: functions for interactivity
8) main2.js: retrieves local storage for appointments.html
9) main3.js: retrieves local storage for appointmentdetail1.html

Explanation of site:
This is a potential user scenario. When a user enters the site, they are prompted to login using their Andrew ID credentials. After logging in, the user sees an overview of their upcoming appointments in a table. Currently, there is no table data because the user does not have any upcoming appointments. The user is prompted to make an appointment by clicking on the blue button at the top of the page. After clicking the "make an appointment" button, they are prompted to select an appointment type (vaccine or test), their vaccine brand or test version (Pfizer, Moderna, J&J, or the COVID-19 Antiboy Test). The user also selects the date and time of their appointment. Lastly, by using local storage in main.js, the user is required to confirm their inputted appointment type and brand by filling in the checkbox. After confirming their appointment, they are able to book their appointment. The user is brought to an appointment confirmation page. Using local storage, the appointment details page displays the user's inputs. After receiving confirmation, they return to their upcoming appointments. Using local sotage, the user sees that the upcoming appointments table has been populated with the appointment that the user just booked. The user quickly realizes that they need to cancel their appointment. The user clicks on the appointment that they just booked on the upcoming appointments table. The user clicks on the button "Cancel Appointment" and receieves immediate visual confirmation that they have successfully cancelled their appointment. Lastly, the user is brought back to the upcoming appointments page where they see that they have no upcoming appointments, as they successfully cancelled their appointment.

Bonus Points:

Some interesting and useful Javascript functionality:
There are two functionalities that I implemented using Javascript.
1) After doing a simple heuristic evaluation, I implemented some error prevention methods when a user books an appointment. During the appointment booking form, I created a checkbox that confirms the user's appointment type and brand using local storage. I used both local storage and another Javascript function to make the checkbox required. The user can't submit the form without checking the box and confirming their appointment. This ensures that the user double checks their appointment details before submitting, to lessen the chance of error.
2) I also implemented a forgot password and answer questions functionality using Javascript. In the login page, if the user needs to reset their password or has some questions, they can click on the button. The user's device automatically opens their default e-mail application to resolve their problems. The email automatically populates the recipient, as well.