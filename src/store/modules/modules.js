import httpclient from '@/httpClient'
import router from '@/router'
export default{
    state:{
        modules:[],
        editModule:{}
    },
    actions:{
        async fetchModules({commit},filter){
            const params = [
                filter.moduleName ? `name=${filter.moduleName}` : null,
                filter.level ? `ExamLevelId=${filter.level}` : null,
                filter.status ? `status=${filter.status}` : null,
                filter.page?`page=${filter.page}`:null,
                filter.pageSize?`pageSize=${filter.pageSize}`:null
              ].filter(param => param !== null)
              .join('&');
            const response=await httpclient.get(`api/admin/exammodule?${params}`)
            if(response.status===200){
                commit('updateModules',response.data.result)
                commit('updatePaging',response.data.meta)
            }
        },
        async addNewModule(/* eslint-disable-next-line no-unused-vars */ _,data){
            const response=await httpclient.post('api/admin/exammodule',data);
            if(response.status===200){
                router.push('/Module')
            }
        },
        async editModule(/* eslint-disable-next-line no-unused-vars */ _,data){
            const response=await httpclient.put('api/admin/exammodule',data);
            if(response.status===200){
                router.push('/Module')
            }
        },
        async deleteExamModules(/* eslint-disable-next-line no-unused-vars */ _,data){
            await httpclient.post('/api/admin/exammodule/delete',{ids:data})
            
        },
        setModuleToEdit:({commit},data)=>commit("updateEditModule",data)
    },
    mutations:{
        updateModules:(state,data)=>state.modules=data,
        updateEditModule:(state,data)=>state.editModule=data

    },
    getters:{
        getModules:(state)=>state.modules,
        getEditModule:(state)=>state.editModule
    }
}