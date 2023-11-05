import './bootstrap';

import { createApp } from "vue";
import app from "./components/app.vue";
import router from './router/index.js'
import vuetify from "./vuetify";

createApp(app).use(vuetify).use(router).mount("#app");