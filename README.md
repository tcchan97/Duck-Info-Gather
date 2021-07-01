# Duck-Info-Gather
A Small web application where data scientist can enter info about ducks diets and be able to view all this data.

## Setup

**Frameworks**
- Frontend
  - NextJs
  - Antd Design

- Backend
  - Node.js
  - Prisma

**Frameworks**
Approach: When building this application I needed a frontend so I decided with either Nextjs or Reactjs and decided to use Nextjs because its faster at loading and its capable of using serverless functions or a mock backend if needed. So after I decided to use node.js with prisma as the backend to a MYSQL server because this implementation allows for a simple clean setup for the backend data transfering. I chose prisma because when I worked with it before I have no issues as it was a really good ORM that allowed for lots of features. It also allows for sql statements in javascript. I spend roughly around 3 hours building this out. 2 hours mainly spent on building the base framework of making it work and the last hour was spent on designing and fixing small bugs in the webapp.

**Notes**
Need to run the frontend and backend server for web application to run.

**Important**
Create a .env file in the root of */backend* folder, file should look like. 
If deploying on service, make sure these enviroment variables are put in.


```
DATABASE_URL="mysql://username:password@serverip:port/databaseName"
```
Database Table needs to added to the MYSQL database.
```
The database should include a table called 'duck_submissions' with this schema.

TABLE duck_submission
-------------------------------
id                INT
time              DATETIME
foodType          STRING
location          STRING
numberOfDuck      STRING
quantityOfFood    STRING

```

## Running the app
Step 1: Running the Frontend Server
```
cd frontend

#Install Packages

npm install

# Development
npm run dev

# Production
npm run build
```


Step 2: Running the Backend Server
```
cd backend

#Install Packages

npm install

#Running Server

node app.js
```

Step 3: Web Application will open at:
```
Logger form: http://localhost:3000/
Dashboard: http://localhost:3000/dashboard
```

