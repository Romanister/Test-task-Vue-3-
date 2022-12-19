import { createStore } from 'vuex'
import mockData from '../../mockData.json'
let cachedItems = window.localStorage.getItem('cachedItems');

export default createStore({
  state: {
    showPopup: false,
    show: false,
    items: cachedItems  ? JSON.parse(cachedItems) :  mockData,
  },
  getters: {
  },
  mutations: {
    Delete(state, item) {
      state.items = state.items.map(d=> {
        if (item.id == d.id) {
          if (item.count > 0) {
            return {
              ...d, count: item.count
            } 
          }
          if (item.count == 0) {
            return {
              ...d, count: null, color: null
            }  
          }
        }
        state.showPopup = false
        return d
      })
      window.localStorage.setItem('cachedItems', JSON.stringify(state.items))
      state.show = false
    },
    showPopup(state) {
    state.showPopup = !state.showPopup
    },
    showModal(state) {
    state.show = !state.show
    }
  },
  actions: {
  },
  modules: {
  }
})
