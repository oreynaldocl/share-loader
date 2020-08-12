import {loadScript} from './sLoader';
import {App1Component} from './app1.component';

const app1State = {
  path: 'app1',
  component: App1Component
};

const load = () => {
  /** Replace <%path-to-server-host%> with a server the will host the external application js**/
  return loadScript('http://mfe-server.local:4300/main.js', 'extapp', 'AppModule');
};

const app2State = {
  path: 'ext',
  loadChildren: load
};

// @TODO Tried to load /welcome directly. Probably creating new module in ext app could be possible
const app3State = {
  path: 'ext2/welcome',
  loadChildren: load
};


export const APP_STATES = [
  app1State,
  app2State,
  app3State,
];
