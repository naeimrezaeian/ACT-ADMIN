import httpclient from '@/httpClient'
import router from '@/router';
export default {
    state: {
        subtests: [],
        editSubtest:{}
    },
    actions: {
        async fetchSubtests({ commit }, filter) {
            const params = [
                filter.name ? `name=${filter.name}` : null,
                filter.examLevelId ? `examLevelId=${filter.examLevelId}` : null,
                filter.examModuleId ? `examModuleId=${filter.examModuleId}` : null,
                filter.status ? `status=${filter.status}` : null,
                filter.page?`page=${filter.page}`:null,
                filter.pageSize?`pageSize=${filter.pageSize}`:null
            ]
                .filter(param => param !== null)
                .join('&');
            const response = await httpclient.get(`api/admin/subtest?${params}`);
            if (response.status === 200) {
                commit('updateSubtests', response.data.result)
                commit('updatePaging',response.data.meta)
            }
        },
        async addNewSubtest(/* eslint-disable-next-line no-unused-vars */ _, data) {
            const response = await httpclient.post('/api/admin/subtest', data)
            if (response.status === 200) {
                router.push('/Subjects')
            }
        },
        async editSubtest(/* eslint-disable-next-line no-unused-vars */ _, data) {
            const response = await httpclient.put('/api/admin/subtest', data)
            if (response.status === 200) {
                router.push('/Subjects')
            }
        },
        async deleteSubtests(/* eslint-disable-next-line no-unused-vars */ _,data){
            await httpclient.post('/api/admin/subtest/delete',{ids:data})
            
        },
        setEditSubtest:({commit},data)=>commit('updateEditSubtest',data)
    },
    mutations: {
        updateSubtests: (state, data) => state.subtests = data,
        updateEditSubtest:(state,data)=>state.editSubtest=data
    },
    getters: {
        getSubtests: (state) => state.subtests,
        getEditSubtest:(state)=>state.editSubtest
    }
}