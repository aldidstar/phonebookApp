const {GraphQLSchema, GraphQLObjectType} = require('graphql');
var queryType = require('./queries/index');
var mutation = require('./mutations/index');

exports.userSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
})