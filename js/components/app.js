const App = {
  data() {
    return {
      deviceorientation: 'NO',
      devicemotion: 'NO',
      compassneedscalibration: 'NO',

      absolute: null,

      alpha: null,
      beta: null,
      gamma: null,

      accelerationX: null,
      accelerationY: null,
      accelerationZ: null,
      accelerationIGX: null,
      accelerationIGY: null,
      accelerationIGZ: null,
      rotationAlpha: null,
      rotationBeta: null,
      rotationGamma: null,
      interval: null,
    };
  },

  filters: {
    round(value) {
      return Math.round(value);
    },
  },

  mounted() {
    if (!('ondeviceorientation' in window)) {
    } else {
      this.deviceorientation = 'OK';
      const that = this;
      window.addEventListener('deviceorientation', function (event) {
        that.absolute = event.absolute;
        that.alpha = event.alpha;
        that.beta = event.beta;
        that.gamma = event.gamma;
      });
    }

    if (!('ondevicemotion' in window)) {
    } else {
      this.devicemotion = 'OK';
      const that = this;
      window.addEventListener('devicemotion', function (event) {
        that.accelerationX = event.acceleration.x;
        that.accelerationY = event.acceleration.y;
        that.accelerationZ = event.acceleration.z;
        that.accelerationIGX = event.accelerationIncludingGravity.x;
        that.accelerationIGY = event.accelerationIncludingGravity.y;
        that.accelerationIGZ = event.accelerationIncludingGravity.z;
        that.rotationAlpha = event.rotationRate.alpha;
        that.rotationBeta = event.rotationRate.beta;
        that.rotationGamma = event.rotationRate.gamma;
        that.interval = event.interval;
      });
    }

    if (!('oncompassneedscalibration' in window)) {
    } else {
      this.compassneedscalibration = 'OK';
    }
  },

  methods: {
    
  },

  template: `<div>
    <b-container>
      <h1>Vue Mobile Angle</h1>

      deviceorientation: {{ deviceorientation }} <br>
      devicemotion: {{ devicemotion }} <br>
      compassneedscalibration: {{ compassneedscalibration }} <br>
      <br>
      absolute: {{ absolute }} <br>
      alpha: {{ alpha | round }} <br>
      beta: {{ beta | round }} <br>
      gamma: {{ gamma | round }} <br>
      <br>
      accelerationX: {{ accelerationX | round }} <br>
      accelerationY: {{ accelerationY | round }} <br>
      accelerationZ: {{ accelerationZ | round }} <br>
      <br>
      accelerationIGX: {{ accelerationIGX | round }} <br>
      accelerationIGY: {{ accelerationIGY | round }} <br>
      accelerationIGZ: {{ accelerationIGZ | round }} <br>
      <br>
      rotationAlpha: {{ rotationAlpha | round }} <br>
      rotationBeta: {{ rotationBeta | round }} <br>
      rotationGamma: {{ rotationGamma | round }} <br>
      <br>
      interval: {{ interval }} <br>
    </b-container>
  </div>`,
};

export default App;