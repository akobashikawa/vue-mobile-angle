const Home = () => import('./components/home.js');
const SimpleTest = () => import('./components/simple-test.js');
const OrientationXYZ = () => import('./components/orientation-xyz.js');

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/simple-test', component: SimpleTest },
    { path: '/orientation-xyz', component: OrientationXYZ },
  ]
});

export default router;