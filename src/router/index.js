import Vue from 'vue';
import VueRouter from 'vue-router'
import home from '../components/home';
import research from '../components/research'
import publications from '../components/publications'
import people from '../components/people'
import news from '../components/news'
import contact from '../components/contact'
import login from '../components/login'
import config from '../components/config'
import firebase from 'firebase'

Vue.use(VueRouter);

let router = new VueRouter({
	routes: [
		{
			path : '/',
			name: 'home', 
			component: home
		},
		{
			path: '/contact', 
			name: 'contact',
			component: contact,
			/*meta: { requiresGuest: true }*/
		},
		{
			path: '/research',
			name: 'research',
			component: research,
			/*meta: { requiresGuest: true }*/
		},
		{
			path: '/publications', 
			name: 'publications',
			component: publications,
			/*meta: { requiresGuest: true }*/
		},
		{
			path: '/news', 
			name: 'news',
			component: news,
			/*meta: { requiresGuest: true }*/
		},
		{
			path: '/people',
			name: 'people',
			component: people,
			/*meta: { requiresGuest: true }*/
		},
		{
			path: '/login',
			name: 'login',
			component: login,
			/*meta: { requiresGuest: true }*/
		},
		{
			path: '/config', 
			name: 'config',
			component: config,
			/*meta: { requiresAuth: true }*/
		}

	]
});

export default router;