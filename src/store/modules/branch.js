import httpClient from '@/httpClient'
import router from '@/router'
export default{
    state:{
        branches:[],
        branchToShow:{},
        editBranch:{},
        paging:{}
    },
    actions:{
        async fetchBranches({ commit }, filter) {
            const params = [
              filter.page ? `page=${filter.page}` : null,
              filter.pageSize ? `pageSize=${filter.pageSize}` : null
            ].filter(param => param !== null)
              .join('&');
            const response = await httpClient.get(`/api/admin/branch?${params}`);
            const branches = response.data.result;
            commit('updateBranches', branches);
            commit('updatePaging', response.data.meta);
          },
          async addBranch(/* eslint-disable-next-line no-unused-vars */ _, data){
            const response=await httpClient.post("/api/admin/branch",data)
            if(response.status===200){
                router.push('/Branches')
            }
            else{
                console.log(response)
            }
          },
          async updateBranch({ commit }, data) {
            const response=await httpClient.put("/api/admin/branch",data)
            if(response.status===200){
                commit("updateBranchToShow",data)
                router.push(`/Branches/${data.id}`)
            }
            else{
                console.log(response)
            }
          },
          setBranchToView:({commit},data)=>commit("updateBranchToShow",data)
    },
    mutations: {
        updateBranches(state, branches) {
          state.branches = branches;
        },
        updateBranchToShow(state, branch) {
          state.branchToShow = branch;
        },
        updateEditBranch(state, branch) {
          state.editBranch = branch;
        },
        updatePaging(state, paging) {
          state.paging = paging;
        }
      },
    getters: {
        getBranchList: state => state.branches,
        getSelectedBranch: state => state.branchToShow,
        getEditBranch: state => state.editBranch,
      }
}