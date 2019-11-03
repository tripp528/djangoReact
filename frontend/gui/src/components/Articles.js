import React from 'react';

import { List } from 'antd';

const Articles = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
        position: 'bottom',
      }}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href={`/detail/${item.id}`}>{item.title}</a>}
            description={item.content}
          />
        </List.Item>
      )}
    />
  );
}

export default Articles;
