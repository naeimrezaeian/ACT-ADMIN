import httpclient from '@/httpClient'
import router from '@/router';
export default{
    state:{
        questions:[],
        selectedQuestionBase:null,
        selectedQuestion:null,
    },
    actions:{
        async fetchQuestions({commit},filter){
            const params = [
                filter.questionBaseId?`questionBaseId=${filter.questionBaseId}`:null,
                filter.page?`page=${filter.page}`:null,
                filter.pageSize?`pageSize=${filter.pageSize}`:null
              ].filter(param => param !== null)
              .join('&');
            const response=await httpclient.get(`/api/admin/questions?${params}`)
            if(response.status===200){
                commit('updateQuestions',response.data.result)
                commit('updatePaging',response.data.meta)
            }
        },
        setSelectedQuestionBase:({commit},data)=>commit('updateSelectedQuestionBase',data),
        async addQuestion({state}, data){
            const response= await httpclient.post(`/api/admin/questions/${data.questionType}`,data);
            if(response.status===200){
                router.push(`/Questions/${state.selectedQuestionBase.id}`)
            }
        },
        async editQuestion({state}, data){
            const response= await httpclient.put(`/api/admin/questions/${data.type}`,data);
            if(response.status===200){
                router.push(`/Questions/${state.selectedQuestionBase.id}`)
            }
        },
        async deleteQuestions(/* eslint-disable-next-line no-unused-vars */ _,data){
            await httpclient.post('/api/admin/questions/delete',{ids:data})
            
        },
        setQuestionToEdit:({commit},data)=>commit('updateEditQuestion',data)
    },
    mutations:{
        updateQuestions:(state,data)=>state.questions=data,
        updateSelectedQuestionBase:(state,data)=>state.selectedQuestionBase=data,
        updateEditQuestion:(state,data)=>state.selectedQuestion=data
    },
    getters:{
        getQuestions:(state)=>state.questions,
        getSelectedQuestionBase:(state)=>state.selectedQuestionBase,
        getSelectedQuestion:(state)=>state.selectedQuestion
    }
}