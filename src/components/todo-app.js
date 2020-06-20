import React from 'react'
import { AddItem } from './add-item'
import { TodoItem } from './todo-item'
import uniqid from 'uniqid'
import List from '@material-ui/core/List'

export class TodoApp extends React.Component {
  state = {
    list: [], //{id: '', text: ''}
  }

  handleOnAdd = (value) => {
    const newList = this.state.list
    newList.push({ id: uniqid('item-'), text: value })
    this.setState({ list: newList })
  }

  handleRemove = (id) => {
    const newList = this.state.list.filter((item) => {
      return item.id !== id
    })
    this.setState({ list: newList })
  }

  render() {
    const { list } = this.state
    return (
      <div style={{ height: '100%' }}>
        <List style={{ height: 'calc(100% - 126px)', overflow: 'scroll' }}>
          {list.map((item) => {
            return (
              <TodoItem
                key={item.id}
                text={item.text}
                id={item.id}
                onRemove={this.handleRemove}
              />
            )
          })}
        </List>
        <AddItem onAdd={this.handleOnAdd} />
      </div>
    )
  }
}
