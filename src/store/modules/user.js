import httpClient from '@/httpClient'
import router from '@/router'
import store from "./../../store";
import { jwtDecode } from "jwt-decode";
export default {
    state: {
        user: {},
        selectedUser: {},
        usersNotInBranch: [],
        adminUsers: [],
        error: '',
        loading: false,
        roles: [],
        isCheckerLogedIn : false,
    },
    actions: {
        async adminLogin({ commit }, { username, password }) {
            try {
                const response = await httpClient.post("/api/auth/admin/login", { username, password }, { showLoader: false })

                if (response.data && response.data.success === true) {
                    const token = response.data.result.token;
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    localStorage.setItem('token', token);
                    localStorage.setItem("user", JSON.stringify(response.data.result.user))
                    sessionStorage.setItem('isAuth', 'true');
                    httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.result.token;
                    commit("updateLoggedinUser", response.data.result.user)
                    const decodedToken = jwtDecode(token);
                    const allRoles = store.getters['getBranchUserType'];
                    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
                    if (role.toLowerCase() === allRoles[3].key.toLowerCase()) {
                        commit('updateIsCheckerLogedIn');
                        router.push('/UserExams');
                    } else {
                        router.push('/dashboard');
                    }
                }
                else {
                    console.log('error in response')
                    commit('updateOnError', { error: 'Логин или пароль введены неверно', loading: false })
                }
            } catch (error) {
                console.log('error in catch block')
                commit('updateOnError', { error: 'Ошибка соединения к серверу', loading: false })
            } finally {
                store.dispatch('loader/hideLoadingAnimation')
            }

        },
        async getUsersNotInBranch({ commit }, data) {
            const response = await httpClient.get(`/api/admin/users/GetUsersNotInBranches${data?.branchId ? `?branchId=${data.branchId}` : ''}`)
            if (response.status === 200) {
                commit("updateUsersNotInBranch", response.data.result)
            }
            else {
                console.log(response)
            }
        },
        async getAllRoles({ commit }) {
            const response = await httpClient.get('/api/admin/UserRole/GetAllRoles')
            if (response.status === 200) {
                commit("updateRoles", response.data.result)
            }
            else {
                console.log(response)
            }
        },
        async getAllAdminUsers({ commit }, filter) {
            const params = [
                filter.page ? `page=${filter.page}` : null,
                filter.pageSize ? `pageSize=${filter.pageSize}` : null,
                filter.city ? `city=${filter.city}` : null,
                filter.status ? `status=${filter.status}` : null,
                filter.name ? `name=${filter.name}` : null,
                filter.branch ? `branch=${filter.branch}` : null,
            ].filter(param => param !== null)
                .join('&');
            const response = await httpClient.get(`/api/admin/Users/GetAllSystemUsers?${params}`);
            if (response.status === 200) {
                commit("updateAdminUsers", response.data.result)
                commit('updatePaging', response.data.meta)
            }
            else {
                console.log(response)
            }
        },
        async addNewSystemUser(/* eslint-disable-next-line no-unused-vars */ _, data) {
            const response = await httpClient.post('/api/admin/users/AddSystemUser', data)
            if (response.status === 200) {
                router.push('/Users')
            }
        },
        async editSystemUser(/* eslint-disable-next-line no-unused-vars */ _, data) {
            const response = await httpClient.put('/api/admin/users/UpdateSystemUser', data)
            if (response.status === 200) {
                router.push('/Users')
            }
        },
        setUserToEdit({ commit }, data) {
            commit("updateSelectedUser", data)
        }

    },
    mutations: {
        updateOnError(state, data) {
            state.error = data.error
            state.loading = data.loading
        },
        updateLoggedinUser(state, data) {
            state.user = data
        },
        updateUsersNotInBranch(state, data) {
            state.usersNotInBranch = data
        },
        updateRoles(state, data) {
            state.roles = data
        },
        updateAdminUsers(state, data) {
            state.adminUsers = data
        },
        updateSelectedUser(state, data) {
            state.selectedUser = data
        },
        updateIsCheckerLogedIn (state) {
            state.isCheckerLogedIn = true;
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.user
        },
        getError(state) {
            return state.error
        },
        getLoading(state) {
            return state.loading
        },
        getUsersNotInBranch(state) {
            return state.usersNotInBranch
        },
        getAllRoles(state) {
            return state.roles
        },
        getAdminUsers(state) {
            return state.adminUsers
        },
        getSelectedUser: (state) => state.selectedUser,
        getIsCheckerLogedIn: (state) => state.isCheckerLogedIn,
    }
}
