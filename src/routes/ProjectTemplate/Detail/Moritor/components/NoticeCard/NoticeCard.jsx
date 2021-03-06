import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

export default class NoticeCard extends Component {
  static displayName = 'NoticeCard';

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  };

  static defaultProps = {
    title: '温馨提示',
    content: '现在不是一个买房的低点，建议慎重考虑。',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onClose = () => {
    console.log('onClose triggered!');
  };

  afterClose = () => {
    console.log('afterClose triggered!');
  };

  render() {
    const { title, content } = this.props;
    return (
      <Alert
        title={title}
        closable
        type="prompt"
        onClose={this.onClose}
        afterClose={this.afterClose}
      >
        {content}
      </Alert>
    );
  }
}
