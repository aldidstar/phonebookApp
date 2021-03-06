const {GraphQLNonNull, GraphQLString} = require('graphql');
var UserType= require('../types/user');
var services = require('../../services');

exports.remove = {
    type: UserType.userType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(root, params) {
      return services.deleteUser(params);
    }
  }