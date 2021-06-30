**Important**
Create a .env file in the root of */backend* folder, file should look like. 
If deploying on service, make sure these enviroment variables are put in.


```
DATABASE_URL="mysql://username:password@serverip:port/databaseName"
```

Step 1: Running the Backend Server
```
cd backend

#Install Packages

npm install

#Running Server

node app.js
```