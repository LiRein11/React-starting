import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Going to learn react', important: true, id: 1 },
        { label: 'That is so good', important: false, id: 2 },
        { label: 'I need a break...', important: false, id: 3 }
      ] // Эмуляция сервера, данные приходят 
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id)

      const before = data.slice(0, index); // Получаем массив данных до 
      const after = data.slice(index + 1); // Получаем массив данных после

      const newArr = [...before, ...after]; // Соединяем их 

      return {
        data: newArr
      }

      // data.splice(index, 1);
      // return {
      //   data: data
      // } // Так делать нельзя, потому что идёт взаимодействие со стейтом напрямую
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  render() {
    return (
      <div className='app' >
        <AppHeader />
        <div className='search-panel d-flex'>
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem} />
        <PostAddForm
          onAdd={this.addItem} />
      </div> // Затем эти данные идут в PostList
    )
  }
} // Создаём класс в том случае, если нужно создать например функцию внутри, или ещё как-то взаимодействовать динамически со страницей

