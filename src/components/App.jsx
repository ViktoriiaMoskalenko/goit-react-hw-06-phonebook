import { useDispatch, useSelector } from "react-redux";
import { setStatusContacts, setDeleteContacts } from '../redux/contactsSlice'
import{setStatusFilter } from '../redux/filtersSlice'
import { ContactList } from './Phonebook/ContactList'
import { ContactForm } from './Phonebook/ContactForm'
import { Filter } from './Phonebook/Filter'
import styles from './Phonebook/Phonebook.module.css'

export function App(){
  const contacts = useSelector(state => state.contacts);
  const filters = useSelector(state => state.filters);
  
  const dispatch = useDispatch();

  function hendleSubmit (name, number) {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts.`)
    }
    dispatch(setStatusContacts( { name, number }))
  }
  

  function onDelete(index) {
    dispatch(setDeleteContacts(index))
  }

     function hendleFilter (value) {
       dispatch(setStatusFilter(value))
        
    }


  function hendleFind() {
    const normalizedFilter = filters.toLowerCase();
    return (contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    ))
    
  }

    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm hendleSubmit={hendleSubmit} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter filter={filters} hendleFilter={hendleFilter}/>
        <ContactList contacts={hendleFind()} onDeleteItem = {onDelete}/>
      </div>
    )
  }