import httpClient from '@/httpClient'
export default {
    state: {
        branchExams: [],
        selectedBranchExam: null,
        selectedStudent: null,
        showEditStudentPopup: false,
    },
    actions: {
        setShowEditStudentPopup({ commit }, data) {
            if (data.student) {
                data.student.groupId ??= data.group?.id
            }
            commit("updateSelectedBranchExam", data.group)
            commit("updateSelectedStudent", data.student)
            commit("updateShowEditStudentPopup", data.show)
        },
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
        async addUserToBranchExam(/* eslint-disable-next-line no-unused-vars */ _, student) {
            try {
                const response = await httpClient.post('/api/admin/branchexams/AddStudentToExam', student);
                if (response.status === 200) {
                    return true
                }
            } catch (error) {
                return false
            }
        },
        async editUserInBranchExam(/* eslint-disable-next-line no-unused-vars */ _, student) {
            try {
                const response = await httpClient.put('/api/admin/branchexams/EditStudent', student);
                if (response.status === 200) {
                    return true
                }
            } catch (error) {
                return false
            }
        },
        async getAllStudents({ commit }, filter) {
            const params = [
                filter?.page ? `page=${filter.page}` : null,
                filter?.pageSize ? `pageSize=${filter.pageSize}` : null,
                filter?.groupId ? `groupId=${filter.groupId}` : null,
            ].filter(param => param !== null)
                .join('&');
            const response = await httpClient.get(`/api/admin/branchexams/GetAllStudents?${params}`)
            if (response.status === 200) {
                commit("updateStudents", { students: response.data.result, groupId: filter.groupId })
            }
        }
    },
    mutations: {
        updateBranchExams: (state, data) => state.branchExams = data,
        updateSelectedBranchExam: (state, data) => state.selectedBranchExam = data,
        updateStudents(state, data) {
            const branchExam = state.branchExams.find(exam => exam.id === data.groupId)
            console.log(data, branchExam)
            branchExam.userExamLevels = data.students
        },
        updateSelectedStudent: (state, data) => state.selectedStudent = data,
        updateShowEditStudentPopup: (state, data) => state.showEditStudentPopup = data,
    },
    getters: {
        getBranchExams: (state) => state.branchExams,
        getSelectedBranchExam: (state) => state.selectedBranchExam,
        getSelectedStudent: (state) => state.selectedStudent,
        getShowEditStudentPopup: (state) => state.showEditStudentPopup,
    }
}