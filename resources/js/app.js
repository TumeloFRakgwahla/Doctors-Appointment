import "./bootstrap";
import { createApp } from "vue";
import vuetify from "./vuetify";
import app from "./layouts/app.vue";
import router from './router';
 
createApp(app)
    .use(vuetify)
    .use(router)
    .mount("#app");