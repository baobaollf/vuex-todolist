import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            {item: "lear vue", isCompleted: false},
            {item: "work", isCompleted: false}
        ]
    },
    mutations: {
        addItem(state, name) {
            state.todos.push({item: name, isCompleted: false})
        },
        deleteItem: (state, index) => {
            state.todos.splice(index, 1);
        }
    },
    getters: {
        getTodos: (state) => state.todos
    },

    actions: {
        addItem (context, n) {
            context.commit('addItem', n);
        },
        deleteItem(context, i) {
            // context.state.todos.splice(i, 1);
            context.commit('deleteItem', i);
        }
    }
})