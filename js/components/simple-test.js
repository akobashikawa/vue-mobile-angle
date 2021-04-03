const Component = {
  name: 'simple-test',

  components: {  },

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

  template: `<div>
    <b-container class="mt-4">
      <h1>Simple Test</h1>

      <b-list-group>
        <b-list-group-item class="d-flex justify-content-between align-items-center" variant="primary">
          deviceorientation:
          <span>{{ deviceorientation }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          absolute:
          <span>{{ absolute }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          alpha:
          <span>{{ alpha }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          beta:
          <span>{{ beta }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          gamma:
          <span>{{ gamma }}</span>
        </b-list-group-item>
      </b-list-group>

      <b-list-group>
        <b-list-group-item class="d-flex justify-content-between align-items-center" variant="info">
          devicemotion:
          <span>{{ devicemotion }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          accelerationX:
          <span>{{ accelerationX }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          accelerationY:
          <span>{{ accelerationY }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          accelerationZ:
          <span>{{ accelerationZ }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          accelerationIGX:
          <span>{{ accelerationIGX }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          accelerationIGY:
          <span>{{ accelerationIGY }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          accelerationIGZ:
          <span>{{ accelerationIGZ }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          rotationAlpha:
          <span>{{ rotationAlpha }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          rotationBeta:
          <span>{{ rotationBeta }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          rotationGamma:
          <span>{{ rotationGamma }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          interval:
          <span>{{ interval }}</span>
        </b-list-group-item>
      </b-list-group>

      <b-list-group>
        <b-list-group-item class="d-flex justify-content-between align-items-center" variant="success">
          compassneedscalibration:
          <span>{{ compassneedscalibration }}</span>
        </b-list-group-item>
      </b-list-group>

    </b-container>
  </div>`,
};

export default Component;