import React from "react";
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css'

export const ContactList = ({ contacts, onDelete }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>
                <p>{name}: {number}</p>
                <button className={css.del_btn} type="button" onClick={() => onDelete(id)}>Delete</button>
            </li>
        ))}
    </ul>
)

ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
    })),
}