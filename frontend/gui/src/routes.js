import React from 'react';
import { Route } from 'react-router-dom';
import { Layout,Calendar } from 'antd';

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import ArticleCreate from "./containers/ArticleCreateView";
import ArticleAnalyzed from "./containers/ArticleAnalyzedView";

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={ArticleList} />
    <Route exact path='/:articleID' component={ArticleDetail} />
    <Route exact path='/calendar' component={Calendar} />
    <Route exact path='/create' component={ArticleCreate} />
    <Route exact path='/:articleID/analyzed' component={ArticleAnalyzed} />
  </div>
);

export default BaseRouter;
