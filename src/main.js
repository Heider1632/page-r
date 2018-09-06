import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import cookie from 'jquery.cookie'
import './assets/js/front.js'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDpidiJZ_bbGfknCi0AYVmqVNXk5Vhh5Mw",
  authDomain: "research-app-57a1a.firebaseapp.com",
  databaseURL: "https://research-app-57a1a.firebaseio.com",
  projectId: "research-app-57a1a",
  storageBucket: "research-app-57a1a.appspot.com",
  messagingSenderId: "1046793302242"
};

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    router,
    render: h => h(App)
    }).$mount('#app');
});