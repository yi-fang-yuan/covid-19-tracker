import Vuex from 'vuex';
import Vue from 'vue';
import tracker from "./modules/tracker";
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        tracker
    }
})