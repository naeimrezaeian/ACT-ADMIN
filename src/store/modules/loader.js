export default {
    namespaced: true,
    state: {
        showLoading: false,
    
    },

    actions: {
        showLoadingAnimation({ commit }) {
            commit("show");
        },
        hideLoadingAnimation({ commit }) {
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