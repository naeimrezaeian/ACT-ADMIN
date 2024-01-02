import { createWebHistory, createRouter } from "vue-router";
import  AdminLogin from './components/Login.vue'
import  AdminDashboard from './components/Dashboard.vue'
import  AdminUsers from './components/Users.vue'
import  AdminUserAdd from './components/UserAdd.vue'
import  AdminUserView from './components/UserView.vue'
import  AdminBranches from './components/Branches.vue'
import  AdminBrancheAdd from './components/BrancheAdd.vue'
import  AdminBrancheView from './components/BrancheView.vue'
import PageParent from './components/PageParent.vue'
import PageNotFound from './components/404.vue'
import AdminLevels from './components/Levels.vue'
import AdminLevelAdd from './components/LevelAdd.vue'
import AdminModule from './components/Module.vue'
import AdminModuleAdd from './components/ModuleAdd.vue'
import AdminSubject from './components/Subject.vue'
import AdminSubjectAdd from './components/SubjectAdd.vue'
import AdminQuestions from './components/Questions.vue'
import AdminQuestionsList from './components/QuestionsList.vue'
import AdminQuestionAddAudio from './components/QuestionsAddAudio.vue'
import AdminQuestionAddLetter from './components/QuestionsAddLetter.vue'
import AdminQuestionAddVideo from './components/QuestionsAddVideo.vue'
import AdminQuestionAddSelect from './components/QuestionsAddSelect.vue'
import AdminMessage from './components/Message.vue'
import AdminLog from './components/Log.vue'
import AdminCandidates from './components/Candidates.vue'
import AdminCandidatesAdd from'./components/CandidatesAdd.vue'
import AdminUserExams from'./components/UserExams.vue'
import AdminCorrectingExam from'./components/CorrectingExam.vue'

const routes = [
    {
      path: "/",
      name: "Login",
      component: AdminLogin,
      meta: {  header: false }
    
    },
  
    {
      path: "/UserExams",
      name: "UserExams",
      component: PageParent,
      meta: {  header: true },
      children: [
        {
          path: "",
          component: AdminUserExams,
        },
        {
          path: ":id",
          component: AdminCorrectingExam,
        }
      ]
    },
    
    {
        path: "/Dashboard",
        name: "Dashboard",
        component: AdminDashboard,
        meta: {  header: true }
      },
      {
        path: "/Users",
        name: "Users",
        component: PageParent,
        meta: {  header: true },
        children:[
          {
            path:"",
            component:AdminUsers
          },
          {
            path:":id",
            component:AdminUserView
          },
          {
            path:"Add",
            component:AdminUserAdd
          },
          {
            path:"Edit",
            component:AdminUserAdd
          },

        ]
        
      },
      
      {
        path: "/Branches",
        name: "Branches",
        component: PageParent,
        meta: {  header: true },
        children:[
          {
            path:"",
            component:AdminBranches
          },
          {
            path:":id",
            component:AdminBrancheView
          },
          {
            path:"Add",
            component:AdminBrancheAdd,
           
          },
          {
            path:"Edit",
            component:AdminBrancheAdd,
           
          },

        ]

      },
      {
        path: "/Levels",
        name: "Levels",
        component: PageParent,
        meta: {  header: true },
        children:[
          {
            path:"",
            component:AdminLevels
          },
          {
            path:":id",
            component:AdminBrancheView
          },
          {
            path:"Add",
            component:AdminLevelAdd
          },
          {
            path:"Edit",
            component:AdminLevelAdd
          },

        ]

      },      
      {
        path: "/Module",
        name: "Module",
        component: PageParent,
        meta: {  header: true },
        children:[
          {
            path:"",
            component:AdminModule
          },
          {
            path:":id",
            component:AdminBrancheView
          },
          {
            path:"Add",
            component:AdminModuleAdd
          },
          {
            path:"Edit",
            component:AdminModuleAdd
          }
        ]
        },
        {
          path: "/Subjects",
          name: "Subjects",
          component: PageParent,
          meta: {  header: true },
          children:[
            {
              path:"",
              component:AdminSubject
            },
            {
              path:":id",
              component:AdminBrancheView
            },
            {
              path:"Add",
              component:AdminSubjectAdd
            },
            {
              path:"Edit",
              component:AdminSubjectAdd
            }
          ]
          },
          {
            path: "/Questions",
            name: "Questions",
            component: PageParent,
            meta: {  header: true },
            children:[
              {
                path:"",
                component:AdminQuestions
              },
              {
                path:":id",
                component:AdminQuestionsList,
              },
              {
                path:"Add",
               children:[
                  {
                    path:"Audio",
                    component:AdminQuestionAddAudio
                  },{
                    path:"Letter",
                    component:AdminQuestionAddLetter
                  },
                  {
                    path:"Video",
                    component:AdminQuestionAddVideo
                  },
                  {
                    path:"Text",
                    component:AdminQuestionAddSelect
                  },
                ]
              },
              {
                path:"Edit",
                children:[
                  {
                    path:"Audio",
                    component:AdminQuestionAddAudio
                  },
                  {
                    path:"Text",
                    component:AdminQuestionAddSelect
                  },
                  {
                    path:"Video",
                    component:AdminQuestionAddVideo
                  },
                  {
                    path:"Letter",
                    component:AdminQuestionAddLetter
                  }
                ]
              }
            ]
            },
          
            {
              path: "/Message",
              name: "Message",
              component: AdminMessage,
              meta: {  header: true }
            
            },
            {
              path: "/Log",
              name: "Log",
              component: AdminLog,
              meta: {  header: true }
            
            },
            {
              path: "/Candidates",
              name: "Candidates",     
                      
              meta: {  header: true },
              children:[
                {
                  path: "AdminCandidates",
                  component:AdminCandidates, 
                },
                {
                  path:"Add",
                  component:AdminCandidatesAdd
                }
              ]
            
            },

            {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
        meta: {  header: true }
       },
      
      

  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;