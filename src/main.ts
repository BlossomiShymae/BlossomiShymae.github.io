import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./site.scss";
import "iconify-icon";

createApp(App)
  .use(router)
  .mount('#app')
