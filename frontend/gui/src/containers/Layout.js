import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link,Router, Route} from 'react-router-dom';

import BreadCrumbRouter from './BreadCrumbRouter';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
  return (
    // code from custom component
    <Layout className="layout">
      <BreadCrumbRouter/>
      <Content style={{ padding: '0 50px' }}>

        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Tripp Gordon ©2019</Footer>
    </Layout>
  );
}

export default CustomLayout;
