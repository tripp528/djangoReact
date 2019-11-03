import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

import CustomLayout from './containers/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        {/* CustomLayout is the only import needed, everything else can be decided by BaseRouter */ }
        <CustomLayout> {/* CustomLayout will always be shown */ }
          <BaseRouter />{ /* BaseRouter will decide what to display based on path */}
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
