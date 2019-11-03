import React from 'react';
import {Route,Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import ArticleCreate from "./containers/ArticleCreateView";
import ArticleAnalyzed from "./containers/ArticleAnalyzedView";

import { Calendar } from 'antd';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={ArticleList} />
    <Route exact path='/:articleID' component={ArticleDetail} />
    <Route exact path='/calendar' component={Calendar} />
    <Route exact path='/create' component={ArticleCreate} />
    <Route exact path='/:articleID/analyzed' component={ArticleAnalyzed} />
  </div>
);

class CustomCrumbItem extends React.Component {
  state = {
    articleID: this.props.match.params.articleID
  }
  render() {
    return (
      <Breadcrumb.Item><Link to={this.props.match.url}>{this.props.name}</Link></Breadcrumb.Item>
    );
  }
}

class BreadCrumbRouter extends React.Component {
  render () {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Route path='/'
            render={props => (
              <CustomCrumbItem {...props} name={`List`} />
            )} />
        <Route path='/:articleID'
            render={props => (
              <CustomCrumbItem {...props} name={`Detail`} />
            )} />
        <Route path='/:articleID/analyzed'
            render={props => (
              <CustomCrumbItem {...props} name={`Analysis`} />
            )} />
      </Breadcrumb>
    );
  }
}

export {BaseRouter};
export {BreadCrumbRouter};
