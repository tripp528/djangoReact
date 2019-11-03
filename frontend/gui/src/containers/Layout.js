import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link,Router, Route} from 'react-router-dom';

import BreadCrumbRouter from '../routers/BreadCrumbRouter';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
  return (
    // code from custom component
    <Layout className="layout">
      <Header className="myHeader"> <h1 className="title">Sentiment Models</h1> </Header>
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
