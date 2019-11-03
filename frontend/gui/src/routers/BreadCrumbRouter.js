import React from 'react';
import {Route} from 'react-router-dom';
import { Breadcrumb } from 'antd';

import CustomCrumbItem from "../components/CustomCrumbItem";


class BreadCrumbRouter extends React.Component {
  render () {
    return (
      <Breadcrumb
          style={{ lineHeight: '64px' }}>
        <Route path='/'
            render={props => (
              <CustomCrumbItem {...props} name={`List`} />
            )} />
        <Route path='/detail/:articleID'
            render={props => (
              <CustomCrumbItem {...props} name={`Detail`} />
            )} />
        <Route path='/detail/:articleID/analyzed'
            render={props => (
              <CustomCrumbItem {...props} name={`Analysis`} />
            )} />
        <Route path='/create'
            render={props => (
              <CustomCrumbItem {...props} name={`Create`} />
            )} />
      </Breadcrumb>
    );
  }
}

export default BreadCrumbRouter;
