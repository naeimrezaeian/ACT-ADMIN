export default {
    state: {
        statusField: [{
            key: 'active',
            value: 'Enable'
        },
        {
            key: 'disable',
            value: 'Disable'
        }
        ],
        subtestTypes:[{
                key:'text',
                value:'Text'
            },
            {
                key:'letter',
                value:'Letter'
            },
            {
                key:'audio',
                value:'Audio'
            },
            {
                key:'video',
                value:'Video'
            }
        ],
        boolTypes:[{
            key:'false',
            value:'False'
        },
        {
            key:'true',
            value:'True'
        }],
        defaultPaging:{pageSize:10,maxVisibleButtons:5},
        paging:{},
        swalDeleteDialogConfig:{
        prompt:{
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        },
        successDelete:{
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
        }
    }
    },
    mutations:{
        updatePaging:(state,data)=>state.paging=data
    },
    getters:{
        getStatusField:(state)=>state.statusField,
        getSubtestTypes:(state)=>state.subtestTypes,
        getBoolTypes:(state)=>state.boolTypes,
        getDefaultPaging:(state)=>state.defaultPaging,
        getPaging:(state)=>state.paging,
        getSwalDeleteDialog:(state)=>state.swalDeleteDialogConfig
    }
}