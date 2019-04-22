const { docClient } = require('../config/awsSdkConfig');
const config = require('../config/dynamoConfig');
const Boom = require('boom');

// Gets all users
const get = async () => {
  const params = {
    TableName: config.aws_table_name.health
  };
  try {
    const { Items } = await docClient.scan(params).promise();
    return Items;
  }
  catch (e) {
    return Boom.badImplementation({ message: 'Error: Server error' });
  }
};

const getByNric = async (req) => {
  try {
    const nric = req.query.nric;
    const params = {
      TableName: config.aws_table_name.health,
      KeyConditionExpression: "nric = :id",
      ExpressionAttributeValues: {
        ":id": nric
      }
    };
    const data = await docClient.query(params).promise();
    return data;
  } catch (e) {
    return Boom.badImplementation({ message: 'Error: Server error', error: e });
  }
};

const insert = async (req) => {
  try {
    const { nric, policyFormNumber, categories } = req.payload;
    const params = {
      TableName: config.aws_table_name.health,
      Item: { nric, policyFormNumber, categories }
    };
    const data = await docClient.put(params).promise();
    return {
      success: true,
      message: 'Added user',
      data
    };
  }
  catch (e) {
    return Boom.badImplementation({ message: 'Error: Server error', error: e });
  }
};

module.exports = { get, getByNric, insert };