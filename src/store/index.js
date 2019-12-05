import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router" 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    response:{
      type: '',
      message:''
    }
  },
 
  mutations: {
  },
  actions: { 
     async  Register({commit}, userData) {
        try{
         const response = await axios.post('http://localhost:3000/register', userData)
 console.log(response);
          let responseObject = {
            type: 'success',
            message: response.data.message
          }
          commit('setResponse', responseObject)
          router.push("/login")
          console.log(responseObject)
        }catch(error){
          console.log(error.response)
          }
        },

        async  Login({commit}, userData) {
          try{
           const response = await axios.post('http://localhost:3000/login', userData)
   console.log(response);
            let responseObject = {
              type: 'success',
              message: response.data.message
            }
            router.push("/booking")
            commit('setResponse', responseObject)
          }catch(error){
            console.log(error.response)
            }
          },

          async  Booking({commit}, userData) {
            try{
             const response = await axios.post('http://localhost:3000/booking', userData)
     console.log(response);
              let responseObject = {
                type: 'success',
                message: response.data.message
              }
              router.push("/bookingSum")
              commit('setResponse', responseObject)
            }catch(error){
              console.log(error.response)
              }
            },

            async  BookingSum({commit}, userData) {
              try{
               const response = await axios.delete('http://localhost:3000/booking/:id', userData)
       console.log(response);
                let responseObject = {
                  type: 'success',
                  message: response.data.message
                }
                // router.push("/bookingSum")
                commit('setResponse', responseObject)
              }catch(error){
                console.log(error.response)
                }
              }
  

      },
  modules: {
  },

  });