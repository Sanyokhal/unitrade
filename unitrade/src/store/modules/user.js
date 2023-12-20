import Token from '@/token-usage';

export default {
  // ...firestoreHelper('users'),
  namespaced: true,
  state: {
    user: Token.getUserFromCookie(),
    accessToken: Token.getAccessTokenFromCookie(),
  },
  getters: {
    user: ({ user }) => {
      return user;
    },
    accessToken: ({ accessToken }) => {
      return accessToken;
    },
  },
};
