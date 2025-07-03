// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import DoctorsList from './components/DoctorsList.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/doctors', name: 'DoctorsList', component: DoctorsList },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'About', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
