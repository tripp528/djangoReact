import React from 'react';

import { List } from 'antd';

const Articles = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href={`/${item.id}`}>{item.title}</a>}
            description={item.content}
          />
        </List.Item>
      )}
    />
  );
}

export default Articles;
