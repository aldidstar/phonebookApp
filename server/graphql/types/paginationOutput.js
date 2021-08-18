const {GraphQLObjectType, GraphQLInt, GraphQLList}  = require('graphql');

const PaginatedListType = (ItemType) => new GraphQLObjectType({
  name: 'Paginated' + ItemType,
  fields: {
    items: { type: new GraphQLList(ItemType) },
    count: { type: GraphQLInt }
  }
})

module.exports = PaginatedListType;