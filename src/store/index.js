import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    persons: [
      { name: "mg mg", city: "yangon" },
      { name: "aung aung", city: "mandalay" },
      { name: "su su", city: "nay pyi taw" },
    ],
  },
  mutations: {
    addPersons(state, payload) {
      setTimeout(() => {
        state.persons.push(payload);
      }, 3000);
    },
  },
  actions: {
    addPersons(context, payload) {
      setTimeout(() => {
        context.commit("addPersons", payload);
      }, 3000);
    },
  },
  getters: {
    persons: (state) => {
      return state.persons.map((person) => {
        return { name: person.name + "--", city: person.city };
      });
    },
  },
});
