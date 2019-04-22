let AWS = require("aws-sdk");
const dbConfig = require('./dynamoConfig.js');

AWS.config.update(dbConfig.aws_config);

let dynamoDb = (function () {
  let instance;

  function createDynamoInstance() {
    let object = new AWS.DynamoDB();
    console.log('createDynamoInstance');
    return object;
  }
  return {
    getDynamoInstance: function () {
      if (!instance) {
        instance = createDynamoInstance();
      }
      return instance;
    }
  };
})();

let docClient = (function () {
  let instance;

  function createDocClientInstance() {
    let object = new AWS.DynamoDB.DocumentClient();
    console.log('createDocClientInstance');
    return object;
  }

  return {
    getDocClientInstance: function () {
      if (!instance) {
        instance = createDocClientInstance();
      }
      return instance;
    }
  };
})();

module.exports = {
  dynamoDb: dynamoDb.getDynamoInstance(),
  docClient: docClient.getDocClientInstance()
}