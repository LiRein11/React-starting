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
        { label: 'Going to learn react', important: true, like: false, id: 1 },
        { label: 'That is so good', important: false, like: false, id: 2 },
        { label: 'I need a break...', important: false, like: false, id: 3 }
      ], // Эмуляция сервера, данные приходят 
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id)

      const before = data.slice(0, index); // Получаем массив данных до 
      const after = data.slice(index + 1); // Получаем массив данных после

      const newArr = [...before, ...after]; // Соединяем их 

      // const newArr = [...data.slice(0, index), ...data.slice(index + 1)] // Так можно записать то, что написано выше

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

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id); // Поиск нужного объекта, id приходит и id каждого элемента массива сравнивается с этим id, пока не будет найден

      const old = data[index]; // Сохраняем этот элемент (пост,объект) в переменной
      const newItem = { ...old, important: !old.important } // Напрямую перезаписывать нельзя, поэтому таким образом можно изменить свойство like на противоположное значение

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)] // Берем массив до, массив после, и между ними вставляем наш объект

      return {
        data: newArr
      }
    })
  } // setState всегда вызывает после себя метод render

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id); // Поиск нужного объекта, id приходит и id каждого элемента массива сравнивается с этим id, пока не будет найден

      const old = data[index]; // Сохраняем этот элемент (пост,объект) в переменной
      const newItem = { ...old, like: !old.like } // Напрямую перезаписывать нельзя, поэтому таким образом можно изменить свойство like на противоположное значение

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)] // Берем массив до, массив после, и между ними вставляем наш объект

      return {
        data: newArr
      }
    })
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1 // В каждом элементе находим свойство label и внутри этого свойства находим то, что ввёл пользователь (если не нашли, то будет -1, поэтому >-1, тк нам нужны все посты, которые содержат то, что ввёл пользователь)
    });
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  } // Фильтрация по понравившимся или всем постам

  onUpdateSearch(term) {
    this.setState({ term })
  }

  onFilterSelect(filter) {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state

    const liked = data.filter(item => item.like).length; // Функция проверет каждый элемент и смотрит на like, если свойство like true, то функция возвращает каждый такой элемент (новый массив) и после получаем длину массива (кол-во элементов)
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter); // Наши видимые посты, которые отфильтровал пользователь

    return (
      <div className='app' >
        <AppHeader
          liked={liked}
          allPosts={allPosts} />
        <div className='search-panel d-flex'>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked} />
        <PostAddForm
          onAdd={this.addItem} />
      </div> // Затем эти данные идут в PostList
    )
  }
} // Создаём класс в том случае, если нужно создать например функцию внутри, или ещё как-то взаимодействовать динамически со страницей

