const {GraphQLNonNull, GraphQLString} = require('graphql');
var UserType = require('../types/user');
var services = require('../../services');

exports.add = {
  type: UserType.userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return services.createUser(params);
  }
}