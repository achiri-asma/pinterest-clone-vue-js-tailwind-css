import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ProfilePage from './views/ProfilePage.vue';

const routes = [
  {
   path: '/',
  name: 'HomePage',
    component: HomePage
 },
 {
  path: '/profile',
 name: 'ProfilePage',
   component: ProfilePage
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
