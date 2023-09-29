import httpClient from '@/httpClient'
export default {
    state: {
        branchExams: [],
    },
    actions: {
        async fetchBranchExams({ commit }, filter) {
            const params = [
                filter?.page ? `page=${filter.page}` : null,
                filter?.pageSize ? `pageSize=${filter.pageSize}` : null,
                filter?.examDate ? `examDate=${filter.examDate}` : null,
                filter?.examLevelId ? `examLevelId=${filter.examLevelId}` : null,
                filter?.status ? `status=${filter.status}` : null,
                filter?.comment ? `comment=${filter.comment}` : null,
            ].filter(param => param !== null)
                .join('&');
            const response = await httpClient.get(`/api/admin/branchexams?${params}`)
            if (response.status === 200) {
                commit("updateBranchExams", response.data.result)
            }

        },
        async createBranchExam(/* eslint-disable-next-line no-unused-vars */ _, branchExam) {
            try {
                const response = await httpClient.post('/api/admin/branchexams', branchExam);
                if (response.status === 200) {
                    return true
                }
            } catch (error) {
                return false
            }
        },
    },
    mutations: {
        updateBranchExams: (state, data) => state.branchExams = data,
    },
    getters: {
        getBranchExams: (state) => state.branchExams,
    }
}