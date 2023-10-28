export default {
    namespaced: true,
    state: {
        showLoading: false,
    
    },

    actions: {
        show({ commit }) {
            commit("show");
        },
        hide({ commit }) {
            commit("hide");
        },
    },

    mutations: {
        show(state){
            state.showLoading = true;
        },

        hide(state){
            state.showLoading = false;
        }
    }
}