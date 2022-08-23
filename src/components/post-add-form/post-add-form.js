import React, { Component } from "react";

import './post-add-form.css'

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value
    }) // Стрелочная функция не нужно, т.к. значение не зависит от предыдущего значения (также не важно выполнится синхронно или асинхронно)
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    }); // Очищение инпута после отправки (чтобы работало важно сделать input контролируемым (ниже))
  }

  render() {
    return (
      <form className="bottom-panel d-flex"
        onSubmit={this.onSubmit} // Событие отправки (вешается на форму, а не кнопку)
      >
        <input
          type="text"
          placeholder="О чём вы думаете сейчас?"
          className="form-control new-post-label"
          onChange={this.onValueChange} // Отслеживание того, что ввёл пользователь
          value={this.state.text} // Исправление "неконтролируемого элемента" (такими элементами могут быть: input, textarea, select)
        />
        <button
          type="submit"
          className="btn btn-outline-secondary">
          Добавить</button>
      </form>
    )
  }
} // В формат класса нужно переделывать, когда будет какое-то внутреннее состояние (state)

