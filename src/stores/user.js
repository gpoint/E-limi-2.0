import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    photoUrl: null,
    firstName: null,
    lastName: null,
    email: null,
    countryCode: null,
    phone: null,
    authorization: null,
  }),
  getters: {
    isLoggedIn: (state) => {
      return !!state.authorization;
    },
  },
  actions: {
    clear: () => {},
  },
});
