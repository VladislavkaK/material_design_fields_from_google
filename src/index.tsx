declare const module: any;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Input } from './components';

const render = () => {
  ReactDOM.render(
        <Input />,
    document.querySelector('app'),
  );
};

render();
