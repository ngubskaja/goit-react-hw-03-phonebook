import React, { Component } from "react";
import css from '../Form/Form.module.css';


export class Form extends Component {
state ={
    name: '',
    number: '',
}

handleChange = evt => {
    // console.log(evt.currentTarget)
    // console.log(evt.currentTarget.name)
    // console.log(evt.currentTarget.value)
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,})
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state)
    this.reset()
  }

  reset = () => {
    this.setState({ name: '', number: '',})
  }

render(){
    return(
        <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="" className={css.form}>    
        <p className={css.title}>Name</p>
            <input 
            className={css.input_form}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
                />
        <p className={css.title}>Number</p>
             <input
             className={css.input_form}
             value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
                  />
        </label>
        <button className={css.add_btn} type="submit">Add contact</button>      
          </form>
    )
}
}