import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "inho",
      age: 28,
      likes: [30, 40, 50],
      judge: [false, false, false],
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    nameChange(state) {
      state.name = "park";
    },
    ageChange(state, payload) {
      state.age += payload;
    },
    likesAdd(state, idx) {
      if (state.judge[idx] === false) {
        state.likes[idx]++;
        state.judge[idx] = true;
      } else {
        state.likes[idx]--;
        state.judge[idx] = false;
      }
    },
  },
  actions: {
    getData(store) {
      axios
        .get("https://codingapple1.github.io/vue/more1.json")
        .then((data) => {
          store.commit("setMore", data.data);
        });
    },
  },
});

export default store;
