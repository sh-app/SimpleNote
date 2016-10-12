import React from 'react';
import Fuse from 'fuse.js';

const searchOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  keys: [
    "title",
]
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {notebooks: this.props.allNotebooks};
  }

  componentWillMount() {
    this.props.getAllNotebooks();
  }

  componentWillReceiveProps(nextProps) {
    this.list = nextProps.allNotebooks;
    this.fuse = new Fuse(this.list, searchOptions);
    this.result = this.fuse.search("Moda");
    debugger
  }

  render() {

    return (
      <div>search here</div>
    );
  }
}
