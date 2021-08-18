const {GraphQLObjectType}  = require('graphql');
const UserQueryType = require('./users')

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...UserQueryType,
  },
});

module.exports = QueryType