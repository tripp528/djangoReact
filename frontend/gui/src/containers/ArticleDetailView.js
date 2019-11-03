import React from 'react';
import axios from 'axios';

import Article from '../components/Article';

class ArticleDetail extends React.Component {

  state = {
    article: {},
    articleID: this.props.match.params.articleID
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/${this.state.articleID}`)
      .then(res => {
        this.setState({
          article: res.data
        })
      })
  }

  render() {
    return (
      <Article articleID={this.state.articleID} article={this.state.article}/>
    );
  }
}

export default ArticleDetail;
