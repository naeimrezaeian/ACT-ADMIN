import httpClient from '@/httpClient'
import router from '@/router'
export default{
    state:{
        user:{},
        error: '',
        loading: false,
    },
    actions:{
        async adminLogin({commit},{ username, password }){
            try {
            const response= await httpClient.post("/api/auth/admin/login",{username, password},{showLoader:false})
            
            if(response.data && response.data.success===true){
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    localStorage.setItem('token', response.data.result.token);
                    localStorage.setItem("user", JSON.stringify(response.data.result.user))
                    sessionStorage.setItem('isAuth', 'true');
                    httpClient.defaults.headers.common['Authorization']=  'Bearer '+response.data.result.token;
                    commit("updateLoggedinUser",response.data.result.user)
                    router.push('/dashboard')
            }
            else {
                console.log('error in response')
                commit('updateOnError', { error: 'Логин или пароль введены неверно', loading: false })
            }
        } catch (error) {
            console.log('error in catch block')
            commit('updateOnError', { error: 'Ошибка соединения к серверу', loading: false })
        }
            
        }

    },
    mutations:{
        updateOnError(state,data){
            state.error=data.error
            state.loading=data.loading
        },
        updateLoggedinUser(state,data){
            state.user=data
        }
    },
    getters:{
        getCurrentUser(state){
            return state.user
        },
        getError(state){
           return state.error
        },
        getLoading(state){
            return state.loading
        }

    }
}