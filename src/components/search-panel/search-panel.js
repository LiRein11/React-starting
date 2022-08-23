import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }

  onUpdateSearch(e){
    const term = e.target.value;
    this.setState({term}); // Тоже самое, что term:term
    this.props.onUpdateSearch(term) // Это не рекурсия, это разные функции, эта нужна для того, чтобы обновить state не только здесь, но и в в app.js
  }
  render() {
    return (
      <input
        className='form-control search-input'
        type='text'
        placeholder='Поиск по записям'
        onChange={this.onUpdateSearch}
      />
    )
  }
}

