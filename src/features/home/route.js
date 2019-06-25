import { MainPage } from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'main', component: MainPage },
  ],
};
