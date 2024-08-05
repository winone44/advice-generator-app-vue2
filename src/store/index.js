import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex)

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

export default new Vuex.Store({
  state: {
    slip: {
      id: null,
      advice: null
    }
  },
  getters: {
    getSlip: state => {
      if(state.slip === null) {
        return {
          id: 0,
          advice: ""
        };
      } else {
        return state.slip;
      }
    }
  },
  mutations: {
    setAdvice(state, payload) {
      if (payload.slip) {
        state.slip = payload.slip;
      } else {
        state.slip.id = payload.message.type;
        state.slip.advice = payload.message.text;
      }
    },
  },
  actions: {
    async getAdvice({commit}) {
      const min = 1;
      const max = 224;
      const id = Math.floor(Math.random() * (max - min + 1)) + min;
      try {
        let {data} = await apiClient.get(`advice/${id}`);
        commit('setAdvice', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
  },
  modules: {
  }
})
