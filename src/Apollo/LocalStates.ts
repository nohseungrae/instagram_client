export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_: any, { token }: any, { cache }: any) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_: any, __: any, { cache }: any) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    },
  },
};
