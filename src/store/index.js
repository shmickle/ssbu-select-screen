import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fighters: [],
    fightersLoaded: false
  },
  getters: {
    getFighters: state => {
      return state.fighters
    },
    getSelectedFighter: state => {
      let selectedFighter = state.fighters.find(fighter => {
        return fighter.isSelected
      })

      if (selectedFighter !== undefined) {
        return selectedFighter.name
      } else {
        return ''
      }
    }
  },
  mutations: {
    SET_INITIAL_FIGTHERS: (state, fighters) => {
      fighters.map(fighter => {
        fighter['isSelected'] = false
        state.fighters.push(fighter)
      })

      state.fightersLoaded = true
    },
    SET_SELECTED_FIGHTER: (state, selectedFighter) => {
      state.fighters.map(fighter => {
        if (fighter.name == selectedFighter) {
          fighter.isSelected = true
        } else {
          fighter.isSelected = false
        }
      })
    }
  },
  actions: {
    setInitialFighterState: (context, fighters) => {
      context.commit('SET_INITIAL_FIGTHERS', fighters)
    },
    setSelectedFighterState: (context, fighter) => {
      context.commit('SET_SELECTED_FIGHTER', fighter)
    }
  },
  modules: {}
})
