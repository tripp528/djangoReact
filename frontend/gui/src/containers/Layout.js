import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link,Router, Route} from 'react-router-dom';

import {BreadCrumbRouter} from '../routes';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
  return (
    // code from custom component
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <BreadCrumbRouter/>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default CustomLayout;
