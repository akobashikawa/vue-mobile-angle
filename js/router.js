const Home = () => import('./components/home.js');
const SimpleTest = () => import('./components/simple-test.js');

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/simple-test', component: SimpleTest },
  ]
});

export default router;