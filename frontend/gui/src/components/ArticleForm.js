import React from "react";
import { Form, Input, Button } from "antd";
import axios from 'axios';

const { TextArea } = Input;

class ArticleForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        axios.post('http://127.0.0.1:8000/api/create/', values)
        .then(
        	(response) => { console.log(response) }, 
        	(error) => { console.log(error) }
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("title", {
            rules: [{ required: true, message: "Please input a title!" }]
          })(<Input placeholder="Title" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("content", {
            rules: [{ required: true, message: "Please input some content!" }]
          })(<TextArea rows={4} placeholder="Content" />)}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Post
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default ArticleForm;
