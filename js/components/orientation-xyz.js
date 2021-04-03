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
      <h1>Orientación XYZ</h1>

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

    </b-container>
  </div>`,
};

export default Component;