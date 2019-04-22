# NodeJS DynamoDb Boilerplate

## Docker set up

### Development
`docker-compose up`


## Local set up
### install Dynamo DB in local by following the step in
Download from https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html

### Run Database
To run Dynamo DB in local, go to the DynamoDBLocal_lib folder (inside downloaded folder) and run:
`java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb`

### Migrations (as of now creating tables only)
`LOCAL_ENDPOINT='http://localhost:8000' npm start`


### Development
To start the server, run:
`npm start`

### Testing
To run the tests, run:
`npm test`

### Swagger documentation
Run the application and visit http://localhost:3000/documentation on your browser