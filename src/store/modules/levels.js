import httpClient from '@/httpClient'
import router from '@/router'
export default{
    state:{
        levels:[],
        levelToShow:{},
        editLevel:{},
        paging:{}
        //selectedLevel,
        //level
    },
    actions:{
        async getLevels({commit},filter){
            const params = [
                filter.page?`page=${filter.page}`:null,
                filter.pageSize?`pageSize=${filter.pageSize}`:null
              ].filter(param => param !== null)
              .join('&');
            const response= await httpClient.get(`/api/admin/examlevels?${params}`)
            commit("updateLevels",response.data.result)
            commit('updatePaging',response.data.meta)
        },
        setLevelToShow:({commit},level)=>commit("updateLevelToShow",level),
        async addNewLevel(/* eslint-disable-next-line no-unused-vars */ _, data){
            const response=await httpClient.post("/api/admin/examlevels",data)
            if(response.status===200){
                router.push('/levels')
            }
            else{
                console.log(response)
            }
        },
        async editExamLevel({commit}, data){
            const response=await httpClient.put("/api/admin/examlevels",data)
            if(response.status===200){
                commit("updateEditLevel",null)
                router.push('/levels')
            }
            else{
                console.log(response)
            }
        },
        setEditLevel:({commit},data)=>commit("updateEditLevel",data),
        async deleteExamLevel(/* eslint-disable-next-line no-unused-vars */ _,data){
            await httpClient.post('/api/admin/examlevels/delete',{ids:[data]})
            
        }

    },
    mutations:{

        updateLevels:(state,data)=>state.levels=data,
        updateLevelToShow:(state,data)=>state.levelToShow=data,
        updateEditLevel:(state,data)=>state.editLevel=data,
        
        
    },
    getters:{
        getExamLevels:(state)=>state.levels,
        getlevelToShow:(state)=>state.levelToShow,
        getEditLevel:(state)=>state.editLevel,
    }
}