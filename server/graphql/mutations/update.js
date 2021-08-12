const {GraphQLNonNull, GraphQLString} = require('graphql');
var {userType} = require('../types/user');
var services = require('../../services');

exports.update = {
    type: userType,
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
      return services.updateUser(params)
    }
  }