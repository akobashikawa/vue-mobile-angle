import router from './router.js';

import App from './components/app.js';

var app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');