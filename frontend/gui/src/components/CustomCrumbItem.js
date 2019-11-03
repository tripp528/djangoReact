import React from 'react';
import {Link} from 'react-router-dom';
import { Breadcrumb } from 'antd';

class CustomCrumbItem extends React.Component {
  state = {
    articleID: this.props.match.params.articleID,
    url: this.props.match.url
  }
  render() {
    return (
      <Breadcrumb.Item>
        <Link to={this.state.url}>
          {this.state.articleID} {this.props.name}
        </Link>
      </Breadcrumb.Item>
    );
  }
}

export default CustomCrumbItem;
