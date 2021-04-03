const rr = (value) => Math.round(value);

const Component = {
  name: 'simple-test',

  components: {  },

  data() {
    return {
      context: new (window.AudioContext || window.webkitAudioContext)(),
      alphaSound: false,
      betaSound: false,
      gammaSound: false,
      alphaSoundValue: 90,
      betaSoundValue: 90,
      gammaSoundValue: 90,
      margin: 20,
    };
  },

  computed: {
    deviceorientation() { return this.$root.deviceorientation; },
    absolute() { return this.$root.absolute; },
    
    alpha() { 
      if (this.alphaSound && Math.abs(this.$root.alpha - this.alphaSoundValue) < this.margin) {
        this.playTune(440, 'sine');
      }
      return rr(this.$root.alpha);
    },

    beta() {
      if (this.betaSound && Math.abs(this.$root.beta - this.betaSoundValue) > this.margin) {
        this.playTune(440, 'sine');
      }
      return rr(this.$root.beta);
    },

    gamma() {
      if (this.gammaSound && Math.abs(this.$root.gamma - this.gammaSoundValue) > this.margin) {
        this.playTune(440, 'sine');
      }
      return rr(this.$root.gamma);
    },
  },

  filters: {
    round(value) {
      return Math.round(value);
    },
  },

  mounted() {
    this.playTune(440, 'sine');
  },

  methods: {
    // oscType: 'sine'|'square'|'triangle'|'sawtooth'
    playTune(frequency, oscType) {
      const context = this.context;
      var osc = context.createOscillator();

      var gain = context.createGain();
      osc.type = oscType || 'sine';
      osc.connect(gain);
      gain.connect(context.destination)

      // osc.frequency.value = frequency; // Hz DEPRECATED
      osc.frequency.setValueAtTime(frequency, context.currentTime);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
      osc.stop(context.currentTime + 250);
    },
  },

  template: `<div>
    <b-container class="mt-4">
      <h1>Orientación XYZ</h1>

      <div class="xyz-container">
        <div class="plane x" :style="'transform: rotateX(' + beta + 'deg)'"></div>
        <div class="plane y" :style="'transform: rotateY(' + gamma + 'deg)'"></div>
        <div class="plane z" :style="'transform: rotateZ(' + alpha + 'deg)'"></div>
      </div>
      
      <b-list-group>
        <b-list-group-item class="d-flex justify-content-between align-items-center" variant="success">
          alpha:
          <span>{{ alpha }}</span>
          <span>
            <b-form-input v-model="alphaSoundValue" type="range" min="0" max="360"></b-form-input>
            <b-form-checkbox v-model="alphaSound">{{ alphaSoundValue }}</b-form-checkbox>
          </span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center" variant="primary">
          beta:
          <span>{{ beta }}</span>
          <span>
            <b-form-input v-model="betaSoundValue" type="range" min="0" max="360"></b-form-input>
            <b-form-checkbox v-model="betaSound">{{ betaSoundValue }}</b-form-checkbox>
          </span>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center" variant="danger">
          gamma:
          <span>{{ gamma }}</span>
          <span>
            <b-form-input v-model="gammaSoundValue" type="range" min="0" max="360"></b-form-input>
            <b-form-checkbox v-model="gammaSound">{{ gammaSoundValue }}</b-form-checkbox>
          </span>
        </b-list-group-item>
      </b-list-group>

    </b-container>
  </div>`,
};

export default Component;