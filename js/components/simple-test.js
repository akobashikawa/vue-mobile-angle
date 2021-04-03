const Component = {
  name: 'simple-test',

  components: {  },

  data() {
    return {
    };
  },

  computed: {
    deviceorientation() { return this.$root.deviceorientation; },
    absolute() { return this.$root.absolute; },
    alpha() { return this.$root.alpha; },
    beta() { return this.$root.beta; },
    gamma() { return this.$root.gamma; },

    devicemotion() { return this.$root.devicemotion; },
    acceleration() { return this.$root.acceleration; },
    accelerationIncludingGravity() { return this.$root.accelerationIncludingGravity; },
    rotationRate() { return this.$root.rotationRate; },
    interval() { return this.$root.interval; },

    compassneedscalibration() { return this.$root.compassneedscalibration; },
  },

  filters: {
    round(value) {
      return Math.round(value);
    },
  },

  mounted() {
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
          acceleration.x:
          <span v-if="acceleration">{{ acceleration.x }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          acceleration.y:
          <span v-if="acceleration">{{ acceleration.y }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          acceleration.z:
          <span v-if="acceleration">{{ acceleration.z }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          accelerationIG.x:
          <span v-if="accelerationIncludingGravity">{{ accelerationIncludingGravity.x }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          accelerationIG.y:
          <span v-if="accelerationIncludingGravity">{{ accelerationIncludingGravity.y }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          accelerationIG.z:
          <span v-if="accelerationIncludingGravity">{{ accelerationIncludingGravity.z }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          rotationRate.alpha:
          <span v-if="rotationRate">{{ rotationRate.alpha }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          rotationRate.beta:
          <span v-if="rotationRate">{{ rotationRate.beta }}</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          rotationRate.gamma:
          <span v-if="rotationRate">{{ rotationRate.gamma }}</span>
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