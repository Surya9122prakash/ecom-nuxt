const state = () => ({
    user: null,
    isAuthenticated: false,
});

const getters = {
    getUser: (state) => state.user,
    isAuthenticated: (state) => state.isAuthenticated,
};

const actions = {
    clearUser({ commit }) {
        commit('setUser', null);
        commit('setAuthenticated', false);
    },
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setAuthenticated(state, isAuthenticated) {
        state.isAuthenticated = isAuthenticated;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
