import React from 'react';
import axios from 'axios';

import ArticleAnalyzer from "../components/ArticleAnalyzer";

class ArticleDetail extends React.Component {

  state = {
    analyzed: {}
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID
    axios.get(`http://127.0.0.1:8000/api/${articleID}/analyzed`)
      .then(res => {
        this.setState({
          analyzed: res.data
        })
      })
  }

  render() {
    return (
      <ArticleAnalyzer analyzed={this.state.analyzed}/>
    );
  }
}

export default ArticleDetail;
