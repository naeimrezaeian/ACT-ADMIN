import httpClient from '@/httpClient'
export default {
    state: {
        branchExams: [],
        selectedBranchExam: null,
        selectedStudent: null,
        showEditStudentPopup: false,
        userExamResults: [],
        manualCheckSubtests: [],
        UserExamToShow: {},
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
        async createBranchExam({ commit }, branchExam) {
            try {
                const response = await httpClient.post('/api/admin/branchexams', branchExam);
                if (response.status === 200) {
                    const exam = await httpClient.get(`/api/admin/BranchExams/GetBranchExam/${response.data.result.id}`)
                    if (exam.status === 200)
                        commit("updateBranchExams", exam.data.result)
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
        },
        async getUserResultMatrix({ commit, state }, { studentId, examGroupId }) {
            if (state.userExamResults.find(result => result.studentId === studentId)) return
            const response = await httpClient.get(`/api/admin/branchexams/GetUserExamResult/${examGroupId}/${studentId}`)
            if (response.status === 200) {
                const result = { studentId, result: response.data.result }
                commit("updateUserExamResults", result)
            }
        },
        async setBranchExamAsDone({ commit }, examGroupId) {
            try {
                const response = await httpClient.post(`/api/admin/branchexams/FinishBranchExam/${examGroupId}`);
                if (response.status === 200) {
                    commit("updateBranchExamStatus", { examGroupId, status: response.data.result.status })
                    return true
                }
            } catch (error) {
                return false
            }
        },
        async archiveBranchExam({ commit }, examGroupId) {
            try {
                const response = await httpClient.post(`/api/admin/branchexams/ArchiveBranchExam/${examGroupId}`);
                if (response.status === 200) {
                    commit("updateBranchExamStatus", { examGroupId, status: response.data.result.status })
                    return true
                }
            } catch (error) {
                return false
            }
        },
        async deleteBranchExam({ commit }, groupId) {
            try {
                const response = await httpClient.delete(`/api/admin/branchexams/DeleteExam/${groupId}`);
                if (response.status === 200) {
                    commit("updateBranchExamStatus", { examGroupId: groupId, status: response.data.result.status, remove: true })
                    return true
                }
            } catch (error) {
                return false
            }
        },
        async deleteStudentFromBranchExam(/* eslint-disable-next-line no-unused-vars */ _, studentId) {
            try {
                const response = await httpClient.delete(`/api/admin/branchexams/DeleteStudent/${studentId}`);
                if (response.status === 200) {
                    return true
                }
            } catch (error) {
                return false
            }
        },
        async manualCheckSubtests({ commit }, filter) {
            const params = [
                filter?.page ? `page=${filter.page}` : null,
                filter?.pageSize ? `pageSize=${filter.pageSize}` : null,
                filter?.date ? `date=${filter.date}` : null,
                filter?.levelId ? `levelId=${filter.levelId}` : null,
                filter?.moduleId ? `moduleId=${filter.moduleId}` : null,
                filter?.branchId ? `branchId=${filter.branchId}` : null,
                filter?.status ? `status=${filter.status}` : null,
                filter?.name ? `fullName=${filter.name}` : null,
            ].filter(param => param !== null)
                .join('&');
            const response = await httpClient.get(`/api/admin/branchexams/GetManualCheckSubtests/?${params}`)
            if (response.status === 200) {
                commit("updateManualCheckSubtests", response.data.result)
            }
        },
        setUserExamToShow ({ commit }, data) {
            commit("updateUserExamToShow", data)
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
        updateUserExamResults: (state, data) => state.userExamResults.push(data),
        updateBranchExamStatus: (state, data) => {
            const branchExam = state.branchExams.find(exam => exam.id === data.examGroupId)
            branchExam.status = data.status
            if (data.remove) {
                state.branchExams = state.branchExams.filter(exam => exam.id !== data.examGroupId)
            }
        },
        updateManualCheckSubtests: (state, data) => state.manualCheckSubtests = data,
        updateUserExamToShow: (state ,data) => state.UserExamToShow = data,
    },
    getters: {
        getBranchExams: (state) => state.branchExams,
        getSelectedBranchExam: (state) => state.selectedBranchExam,
        getSelectedStudent: (state) => state.selectedStudent,
        getShowEditStudentPopup: (state) => state.showEditStudentPopup,
        getUserExamResults: (state) => state.userExamResults,
        getManualCheckSubtests: (state) => state.manualCheckSubtests,
        getUserExamToShow: (state) => state.UserExamToShow,
    }
}