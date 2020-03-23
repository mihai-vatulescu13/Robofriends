import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import 'tachyons';
//for undefault(multiple) exporting he need destructuring({variableName})
import {robots} from './robots.js';
//import Cardlist parent //default(single) export
import App from './Containers/App';


//this thing is what react does
// create a component called Card:
    //this Card object data properties(id,name,email) will be passed in props variable our react Card component(Card.js)
    //<Cardlist robots={robots}/> Cardlist extract robots array
ReactDOM.render( <App/>, document.getElementById('root'));

serviceWorker.unregister();
