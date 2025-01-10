𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐑𝐞𝐬𝐮𝐥𝐭𝐬 𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝

The Student Results Dashboard is a web application designed to manage and display student semester results. It features functionalities to add, view, update, and delete student results. The application is built with a modern tech stack, ensuring a seamless and user-friendly experience for administrators.

𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬

Add Results: Allows administrators to input new student results.

View Results: Displays student semester results, including subjects, grades, credits, SGPA, and CGPA.

Update Results: Modify existing student records.

Delete Results: Remove student records as needed.

Dynamic Management: Handles student backlogs efficiently

............................................................................................


𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝

React.js: For building the user interface.

Tailwind CSS: For styling the components.

React Router: For managing application routes.

𝐁𝐚𝐜𝐤𝐞𝐧𝐝

Node.js: Runtime environment.

Express.js: Framework for building the REST API.

MongoDB: Database for storing student records.

Mongoose: ODM for MongoDB.

JWT: For secure authentication.

Dotenv: For environment variable management.

.........................................................

MongoDB (local or cloud instance)

Backend Setup


Start the development server:

npm start

The application will run on http://localhost:3000.
............................................................................
API Endpoints
𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐑𝐨𝐮𝐭𝐞𝐬
POST /api/students: Add a new student result.

GET /api/students: Retrieve all student results.

GET /api/students/:id: Retrieve a specific student's results.

PUT /api/students/:id: Update a student's results.

DELETE /api/students/:id: Delete a student's results.



𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝

The dashboard provides access to all functionalities:

Add Results

View Results

Update Results

Delete Results



 𝐀𝐝𝐝 𝐑𝐞𝐬𝐮𝐥𝐭𝐬 𝐌𝐨𝐝𝐚𝐥
Admins can input student information, semester, subjects, grades, and credits.

Folder Structure

Backend

backend/
├── models/
├── routes/
├── controllers/
├── middleware/
├── config/
└── server.js

Frontend

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│   └── styles/
