import router from './router.js';

import Main from './components/main.js';

var app = new Vue({
  router,
  render: h => h(Main),

  data() {
    return {
      deviceorientation: false,
      absolute: null,
      alpha: null,
      beta: null,
      gamma: null,

      devicemotion: false,
      acceleration: null,
      accelerationIncludingGravity: null,
      rotationRate: null,
      interval: null,

      compassneedscalibration: false,
    };
  },

  methods: {
    deviceorientationHandler(event) {
      this.absolute = event.absolute;
      this.alpha = event.alpha;
      this.beta = event.beta;
      this.gamma = event.gamma;
    },

    devicemotionHandler(event) {
      this.acceleration = event.acceleration;
      this.accelerationIncludingGravity = event.accelerationIncludingGravity;
      this.rotationRate = event.rotationRate;
      this.interval = event.interval;
    },
  },

}).$mount('#app');

if (!('ondeviceorientation' in window)) {
} else {
  app.deviceorientation = true;
  window.addEventListener('deviceorientation', app.deviceorientationHandler, true);
}

if (!('ondevicemotion' in window)) {
} else {
  app.devicemotion = true;
  const that = this;
  window.addEventListener('devicemotion', app.devicemotionHandler, true);
}

if (!('oncompassneedscalibration' in window)) {
} else {
  app.compassneedscalibration = true;
}
