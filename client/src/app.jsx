import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {lightBlueA700} from 'material-ui/styles/colors'
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

// remove tap delay to allow MaterialUI to work properly
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Futura',
  palette: {
    primary1Color: '#05486C',
    primary2Color: '#F0F0F0',
  }
});

// ReactDom.render((
//   <MuiThemeProvider muiTheme={getMuiTheme()}>
//     <Router history={browserHistory} routes={routes} />
//   </MuiThemeProvider>), document.getElementById('react-app'));

ReactDom.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));