const App = {
  data() {
    return {
      
    };
  },

  filters: {
    
  },

  mounted() {
    
  },

  methods: {
    
  },

  template: `<div class="app-box">
    <header>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="./">
          <b-icon icon="collection"></b-icon>
          Vue Mobile Angle
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <b-nav-item route to="/">Inicio</b-nav-item>
              <b-nav-item route to="/simple-test">Simple Test</b-nav-item>
              <b-nav-item route to="/orientation-xyz">Orientación XYZ</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <div class="text-center">
          <small> Vue Mobile Angle </small> <br>
      </div>
    </footer>

  </div>`,
};

export default App;