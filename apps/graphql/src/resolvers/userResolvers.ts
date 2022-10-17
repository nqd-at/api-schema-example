import { Resolvers } from "../generated/graphql";

export const userResolvers: Resolvers = {
  Query: {
    async getUser() {
      return {
        id: 1,
        email: "2",
        name: "3",
        phoneNumbers: ["4"],
      };
    },
  },
};
