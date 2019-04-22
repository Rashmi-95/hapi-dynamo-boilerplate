module.exports = {
  aws_table_name: {
    health: 'HealthTable',
    lifestyle: 'LifestyleTable'
  },
  aws_config: {
    region: process.env.AWS_REGION || 'local',
    endpoint: process.env.AWS_ENDPOINT || process.env.LOCAL_ENDPOINT || `http://dynamo:${process.env.DB_PORT}`
  }
};