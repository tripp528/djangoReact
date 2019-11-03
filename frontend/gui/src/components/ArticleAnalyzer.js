import React from 'react';

import { Card } from 'antd';

const ArticleAnalyzer = (props) => {
  return (
    <Card size="small" title={props.analyzed.title}>
      <p>{props.analyzed.results}</p>
    </Card>
  );
}

export default ArticleAnalyzer;
