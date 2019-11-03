import React from 'react';

import { Card } from 'antd';
import { Button } from 'antd';
import axios from 'axios';

class Article extends React.Component {

  render() {
    const href = "/detail/" + this.props.articleID + "/analyzed"
    return (
      <Card size="small" title={this.props.article.title}>
        <p>{this.props.article.content}</p>
        <Button type="primary" href={href}>
          Analyze
        </Button>
      </Card>
    );
  }
}

export default Article;
