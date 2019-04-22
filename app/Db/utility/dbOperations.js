let { dynamoDb } = require('../../config/awsSdkConfig');

const createTable = async (params) => {
  try {
    let result = await dynamoDb.createTable(params).promise();
    return result;
  } catch (e) {
    const errorText = e.statusCode === 400 ? `Table already Exist ${params.TableName}` : `Unable to create table. Error JSON: ${params.TableName}`;
    console.error(errorText);
    return { error: e };
  }
};

const dropTable = async (params) => {
  try {
    let result = await dynamoDb.deleteTable(params).promise();
    return result;
  } catch (e) {
    const errorText = e.statusCode === 400 ? `Table doesn't Exist ${params.TableName}` : `Unable to drop table. Error JSON: ${params.TableName}`;
    console.error(errorText);
    return { error: e };
  }
};

module.exports = {
  createTable: async (params) => {
    return await createTable(params);

  },
  dropTable: async (params) => {
    return await dropTable(params);
  }
}