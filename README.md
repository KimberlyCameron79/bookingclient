README

PROJECT TITLE:  KDC AIRBNB

DESCRIPTON:

This is a full stack MERN Booking Reservation App for KDC AirBnB. This application reserves AirBnB vacancies for consumers.
1. Search for vacancies available.
2. Reserve vacancies for occupancy.
3. Modify or Cancel Request.


TECHNOLOGIES:
MERN
MongoDB(Atlas, Compass)
Express
React
NodeJs
JavaScript
HTML
CSS
Bootstrap
Axios 

Front End Database: React
a. 	Install create-react-app, bootstrap, axios, react-router-dom, react-bootstrap, react-spinners, antDesign, Moment.js, 
b.	Developed react database setup Components and Navbar
c.	Add new property to package.json after step g. in "Back End Database".
	"proxy": "http://localhost:5000/" 
(This connects back-end server to front-end and when you send api request from our components.)
d. 	Develop home screen and install react-router-dom, Add function to App.js.
e. 	Style home screen in index.css and update style code on Room.js And Home.js(container and return map div).
f.	Develop Room Modal,utilizing Bootstrap Modal. First, created Hooks on Room component.
     		const [show, setShow] = useState(false);
    		const handleClose = () => setShow(false);
    		const handleShow = () => setShow(true);
g. Add Modal style from react-bootstrap and add functionality to View Details Button.
	<button className="btn btn-primary" onClick={handleShow}>View Details</button>
h.	Develop Booking screen style and add Booking function.
i	Develop Error, Loading, and Success Components.
		

Back End Database: NodeJs
a.	Install npm init, npm i express, npm nodemon, mongoose compass, mongoose, router, 
b. 	Develop and setup Server.js
c. 	Install mongoose, setup database in mongoose atlas and connect database access to mongoose compass.
d. 	Connect mongoose to Server.js
e.	Create api and test it in Postman
f.	Connect api to router in routes.
g.	Connect back-end database to front-end database.



HOW TO INSTALL AND RUN APPLICATION:


HOW TO USE THE BOOKING RESERVATION APP:


RESOURCES:

freeCodeCamp
Bootstrap.com
W3Schools
MDN.com
moment.js
antDesign






CHALLENGES:

a. Error debugging in Postman 404 message in duration of testing API, discovered a deficiency in my code to access the routes. "app.use"
b. Decepreciated library dependencies.
c. axios post request 404 errors.
d. Booking.js functionality, the ability to choose a room to reserve.
e. 

FAVORABLE PART OF PROCESS:
a. Getting the Mongoose Database connected with Backend App.
b. Development of API in a JSON file.
c. Implementation of developed API.
d. How to utlized div style on a button <div style={{ float: "right" }}>. (Floats button to the right of page)
e. !important Rule in CSS, (Gives increased importance to propery/value than average. This overrides previous styling rules that specific property on that element.)
f. Modal functionality of the View Details button.


FEATURES TO IMPLEMENT IN THE FUTURE: 
Functionality of Registration and Login
Functionality of Booking reservations.
Payment functiionality
Room snapshot image feature updated per room with room status.
Funcitionality of filtered method of users.
Functionality to add, update, and delete the rooms.

![image](https://user-images.githubusercontent.com/110206975/202363547-a468294e-79b8-4e94-bfd8-2000614be5ef.png)
![image](https://user-images.githubusercontent.com/110206975/202363627-9e83ab41-5f34-4873-924e-a3523d028c52.png)




MIT License:
