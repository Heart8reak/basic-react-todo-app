import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    })
  }

  addItem() {
    //Create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    //Copy of current list of items
    const list = [...this.state.list]
    //Add new item to list
    list.push(newItem)

    //Update state with new list and reset newItem input (reset form)
    this.setState({
      list,
      newItem: ""
    })
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list]

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id)

    this.setState({ list: updatedList })
  }

  render() {
    return (
      <div className="todo">
        Add an item....
        <br />
        <br />
        <input
          type="text"
          placeholder="Type item here..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button
          onClick={() => this.addItem()}
        >
          Add
        </button>
        <br />
        <br />
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            )
          })}
        </ul>

      </div>
    )
  }
}

export default App;
