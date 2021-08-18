var services = require('../../services');
const {GraphQLInputObjectType, GraphQLInt}  = require('graphql');
const UserType = require('../types/user');
const PaginationArgType = require('../types/paginationParam');
const PaginatedListType = require('../types/paginationOutput');


const UserQueryType = {
  users: {
    type: PaginatedListType(UserType.userType),
    args: {
      pagination: {
        type: PaginationArgType,
        defaultValue: { offset: 3, limit: 3 }
      },
    },
    resolve: (_, args) => {
      const { offset, limit, name, phone } = args.pagination
      return {
        items: services.getUsers(limit, offset, name, phone),
        count: services.totalData(name, phone)
      }

    },
  }
}

module.exports = UserQueryType

