import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './style/_global.scss';
import router from './router';

// start - mock service worker
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}
// end - mock service worker

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
