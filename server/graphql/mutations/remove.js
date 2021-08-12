const {GraphQLNonNull, GraphQLString} = require('graphql');
var {userType} = require('../types/user');
var services = require('../../services');

exports.remove = {
    type: userType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(root, params) {
      return services.deleteUser(params);
    }
  }