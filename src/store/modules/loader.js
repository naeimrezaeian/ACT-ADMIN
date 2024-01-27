export default {
    namespaced: true,
    state: {
        showLoading: false,
        showPermission: true,
    },

    actions: {
        showLoadingAnimation({ commit }) {
            commit("show");
        },
        hideLoadingAnimation({ commit }) {
            commit("hide");
        },
        updateShowPermission({ commit }) {
            commit("updateShowPermission");
        },
        resetShowPermission({ commit }) {
            commit("resetShowPermission");
        },
    },

    mutations: {
        show(state){
            state.showPermission ? state.showLoading = true : null;
        },
        hide(state){
            state.showPermission ? state.showLoading = false : null;
        },
        updateShowPermission(state){
            state.showPermission = false;
        },
        resetShowPermission(state){
            state.showPermission = true;
        },
    }
}