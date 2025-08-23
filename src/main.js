// FILE: main.js

import { createApp } from "vue";
import { Quasar, LoadingBar } from "quasar";
import quasarLang from "quasar/lang/ko-KR";

// Import icon libraries
import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";

import "./css/style.css"; // Import your global CSS file

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

// Boot files
import dayjsBoot from "./boot/dayjs";

const myApp = createApp(App);

dayjsBoot({ app: myApp });

myApp.use(Quasar, {
  plugins: {
    LoadingBar,
  }, // import Quasar plugins and add here
  lang: quasarLang,
  config: {
    brand: {},
    animations: "all",
    preFetch: true, // Enable pre-fetching of components
  },
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
