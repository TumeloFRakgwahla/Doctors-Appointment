import "./bootstrap";
import { createApp } from "vue";
import vuetify from "./vuetify";
import app from "./layouts/app.vue";
 
createApp(app).use(vuetify).mount("#app");