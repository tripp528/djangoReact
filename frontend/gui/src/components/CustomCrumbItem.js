import React from 'react';
import {Link} from 'react-router-dom';
import { Breadcrumb } from 'antd';

class CustomCrumbItem extends React.Component {
  state = {
    articleID: this.props.match.params.articleID
  }
  render() {
    return (
      <Breadcrumb.Item>
        <Link to={this.props.match.url}>
          {this.props.name}
        </Link>
      </Breadcrumb.Item>
    );
  }
}

export default CustomCrumbItem;
