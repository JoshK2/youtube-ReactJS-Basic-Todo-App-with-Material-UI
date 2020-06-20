import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import styles from './add-item.module.css'

export class AddItem extends React.Component {
  state = {
    value: '',
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClick = () => {
    const { value } = this.state
    if (value === '') return
    const { onAdd } = this.props
    this.setState({ value: '' })
    onAdd(value)
  }

  render() {
    const { value } = this.state
    return (
      <div className={styles.container}>
        <TextField
          label="Todo"
          variant="outlined"
          value={value}
          onChange={this.handleChange}
          style={{ marginBottom: 5 }}
        />
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Add
        </Button>
      </div>
    )
  }
}
