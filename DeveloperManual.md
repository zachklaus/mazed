# Development Manual

## Start the Node.js server
`./run-server.sh` 

## Configure the MongoDB connection
`source config-database.sh`<br>
Sets evironment variables neccessary for MongoDB connection string and authentication. Asks for username and password so these are not stored in source code (security). This only needs to be run once per development session to set the environment variables that the server uses. Can be configured to suite specific MongoDB instance.

## Start Angular client dev server
`cd client/mazed-client`<br>
`ng serve --open`

## MongoDB database
start running database:<br>
`sudo service mongodb start`
<br>
<br>
stop running database:<br>
`sudo service mongodb stop`
<br>
<br>
check if database is running:<br>
`sudo service mongodb status`

## Requests
The following HTTP requests are supported:
  - GET - used only for requests that retrieve data from the server
  - POST - used only for requests that store new data on the server
  - PUT - used only for requests that update existing data on the server
  - DELETE - used only for requests that delete data on the server

Each HTTP request must include a parameter titled `type` that specifies the type of request. The server uses the value of this field to determine how to handle the request. These types are not the HTTP types but rather the types specific to the mazed server. For example the type `GetUserInfo`.
<br>
<br>
GET and DELETE HTTP requests should not included JSON bodies. All keys to identify desired data should be included in the request perameters. 
<br>
<br>
POST and PUT HTTP requests should included JSON bodies to specify the data that should be saved or udpated.

