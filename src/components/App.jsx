import React from "react";
import { nanoid } from 'nanoid'
import {Form} from './Form/Form'
import {Filter} from './Filter/Filter'
import { ContactList } from "./ContactList/ContactList";
import css from '../index.css'



export class App extends React.Component{

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

 addContactForm = ({name, number}) => {
  const contact ={
    id:nanoid(),
    name,
    number,
  }

  const { contacts } = this.state;
  const checkContacts = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
  if(checkContacts) {
    alert(`${name} is already in contacts.`)
    return;
  }

  this.setState(prevState => ({
    contacts: [contact, ...prevState.contacts]
  }))
 }

 filterByName = (evt) => {
  this.setState({
    filter: evt.currentTarget.value
  })
 }

 visibleContacts = () => {
  const {contacts, filter} = this.state
  const normalized = filter.toLowerCase()
  return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalized))
 }

 handleDeleteContact = (id) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(el => el.id !== id),
  }));
};
 
componentDidMount(){
  const getStorageContacts = localStorage.getItem('contacts')

    if (getStorageContacts !== null) {
      this.setState({
        contacts: JSON.parse(getStorageContacts),
      });
    }
}

componentDidUpdate(prevProps, prevState) {
  // console.log('App componentDidUpdate')

  if(prevState.contacts !== this.state.contacts){
    console.log('Обнова')

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}
 
  render(){

    const visibleContacts = this.visibleContacts();
    return(
    <div className={css.phonebook}>
      <h2>Phonebook</h2>
   <Form onSubmit={this.addContactForm}/>
      <h3>Contacts</h3>
   <Filter filterName={this.filterByName} value={this.state.filter}/>    
   <ContactList onDelete={this.handleDeleteContact} contacts={visibleContacts}/>
    </div>
    )
  }
}