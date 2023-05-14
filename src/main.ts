import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { JsonForms } from '@jsonforms/vue';
import vuetify from "./plugins/vuetify";

const app = createApp(App);

app.component("json-forms", JsonForms);

app.use(vuetify)

app.mount("#app");
