import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    response: {
      type: "",
      message: ""
    },
    token: localStorage.getItem("access_token") || null,
    bookings: []
  },
  getters: {
    apiResponse: state => state.response,
    userlogin(state) {
      return state.token !== null;
    },
    setbooking: state => state.bookings
  },

  mutations: {
    setResponse: (state, payload) => {
      state.response = {
        type: payload.type,
        message: payload.message
      };
    },
    signOut: (state, payload) => {
      state.token = payload;
    },
    getToken: (state, token) => {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
    setbookings(state, bookings) {
      state.bookings = bookings;
    },
    deleteBooking(state, id) {
      state.bookings = state.bookings.filter(function(item) {
        return item._id !== id;
      });
    },
    updateBooking(state, id) {
      const index = state.bookings.findIndex(item => item._id !== id)
      state.bookings.splice(index, 1)
    },
  },
  actions: {
    async Register({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://localhost:3000/register",
          userData
        );
        console.log(response);
        let responseObject = {
          type: "success",
          message: response.data.message
        };
        commit("setResponse", responseObject);
        console.log(responseObject);
      } catch (error) {
        let responseObject = {
          type: "failed",
          message: error.response.data.message
        };
        commit("setResponse", responseObject);
        console.log(error.response);
      }
    },

    async Login({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          userData
        );
        console.log(response);
        let responseObject = {
          type: "success",
          message: response.data.message
        };
        commit("setResponse", responseObject);
        const token = response.data.token;
        localStorage.setItem("access_token", token);
        commit("getToken", token);
        router.push("/booking");
      } catch (error) {
        let responseObject = {
          type: "failed",
          message: error.response.data.message
        };
        commit("setResponse", responseObject);
        console.log(error.response);
      }
    },

    async Booking({ commit }, userData) {
      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + this.state.token;

        const response = await axios.post(
          "http://localhost:3000/booking",
          userData
        );
        console.log(response);
        let responseObject = {
          type: "success",
          message: response.data.message
        };

        router.push("/bookingSum");
        commit("setResponse", responseObject);
      } catch (error) {
        console.log(error.response);
      }
    },
    logout({ commit }) {
      localStorage.removeItem("access_token");
      commit("destroyToken"), router.push("/");
    },

    async BookingSum({ commit }) {
      try {
        console.log("start request");
        const response = await axios.get("http://localhost:3000/booking/all");
        console.log(response);

        commit("setbookings", response.data.data);
        console.log("response", response);
        //router.push("/bookingSum")
      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    async delBookings({ commit }, id) {
      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + this.state.token;
        const response = await axios.delete(
          `http://localhost:3000/booking/${id}`
        );
        console.log(response);

        commit("deleteBooking", id);
        console.log("response", response);
      } catch (error) {
        console.log(error.response);
      }
    },
    async updateBooking({commit}, id) {
      try{
    const response = axios.patch(`http://localhost:3000/booking/${id}`)
        commit('updateBooking', response.data, id)
      }catch(error){
          console.log(error.response)
    }
    }
    },

  modules: {}
});
