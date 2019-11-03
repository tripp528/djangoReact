import React from 'react';
import { Form } from 'antd';
import ArticleForm from '../components/ArticleForm'

const WrappedArticleForm = Form.create({ name: "normal_login" })(
  ArticleForm
);

class ArticleCreate extends React.Component {

  render() {
    return (
      <WrappedArticleForm/>
    );
  }
}
export default ArticleCreate; //make it the "default export"
