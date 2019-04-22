const dbOperations = require('./utility/dbOperations.js');
const fs = require("fs");
const path = "./tables";
var normalizedPath = require("path").join(__dirname, path);

fs.readdirSync(normalizedPath).forEach(async (file) => {
  let tableParameters = require(`${path}/${file}`);
  if (process.env.dropFlag) {
    console.log('drop', tableParameters.TableName);
    await dbOperations.dropTable(tableParameters);
  }
  console.log('create', tableParameters.TableName);
  await dbOperations.createTable(tableParameters);
});