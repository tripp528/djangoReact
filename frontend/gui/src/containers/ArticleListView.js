import React from 'react';
import axios from 'axios';
import { Button } from 'antd';

import Articles from "../components/Articles";

class ArticleList extends React.Component {

  state = {
    articles: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <Button
          href='create'>
          Create
        </Button>
      </div>
    );
  }
}

export default ArticleList;
