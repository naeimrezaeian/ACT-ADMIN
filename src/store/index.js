import { createStore } from "vuex";
import levels from './modules/levels'
import user from './modules/user'
import modules from './modules/modules';
import appDefaults from './modules/appDefaults';
import subtests from './modules/subtests';
import questionBase from './modules/questionBases';
import questions from './modules/questions'
export default new createStore({
    modules:{
        appDefaults,
        user,
        levels,
        modules,
        subtests,
        questionBase,
        questions
    }
})