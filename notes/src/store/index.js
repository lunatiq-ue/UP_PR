import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: [
            {
              title: 'First Note',
              descr: 'Description(1)',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'first'
            },
            {
              title: 'Second Note',
              descr: 'Description(2)',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'second'
            },
            {
              title: 'Third Note',
              descr: 'Description(3)',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'third'
            }
        ]
    },
mutations: {
    addNote (state, note) {
        state.notes.push(note)
    
    }
    
    },
actions: {
    addNote({commit}, note){
        commit('addNote', note)                   
    },
        
    },
getters: {
    getNotes(state){
        return state.notes

    }
    
    },
})