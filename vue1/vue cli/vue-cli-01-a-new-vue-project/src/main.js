import { createApp } from 'vue';

import App from './App.vue';

import MyFriend from './components/MyFriend.vue';
const app =createApp(App);

app.component('friend-list',MyFriend)
app.mount('#app');
