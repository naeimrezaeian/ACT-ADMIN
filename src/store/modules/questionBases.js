import httpclient from '@/httpClient'
export default{
    state:{
        questionBases:[]
    },
    actions:{
        async fetchQuestionBases({commit},filter){
            const params = [
                filter.name ? `title=${filter.name}` : null,
                filter.level ? `ExamLevelId=${filter.level}` : null,
                filter.module? `ExamModuleId=${filter.module}`: null,
                filter.subtest? `SubtestId=${filter.subtest}`:null,
                filter.status ? `status=${filter.status}` : null,
                filter.page?`page=${filter.page}`:null,
                filter.pageSize?`pageSize=${filter.pageSize}`:null
              ]
                .filter(param => param !== null)
                .join('&');
            const response=await httpclient.get(`/api/admin/questionBase?${params}`)
            if(response.status===200){
                commit('updateQuestionBase',response.data.result)
                commit('updatePaging',response.data.meta)
            }
        },
        async addNewQuestionBase(/* eslint-disable-next-line no-unused-vars */_,data){
            const response= await httpclient.post('api/admin/questionBase',data)
        },
        async editQuestionBase(/* eslint-disable-next-line no-unused-vars */_,data){
            const response= await httpclient.put('api/admin/questionBase',data)
        },
        async deleteQuestionBase(/* eslint-disable-next-line no-unused-vars */ _,data){
            await httpclient.post('/api/admin/questionBase/delete',{ids:[data]})
            
        },
    },
    mutations:{
        updateQuestionBase:(state,data)=>state.questionBases=data
    },
    getters:{
        getQuestionBase:(state)=>state.questionBases
    }
}