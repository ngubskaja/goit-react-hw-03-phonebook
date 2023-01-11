import React from "react";
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css'

export const Filter = ({ value, filterName }) => (
    <form className={css.form_filter}>
        <label className={css.filter}><h4>Find contact by name</h4>
            <input className={css.input_filter} type="text" value={value} onChange={filterName} />
        </label>
    </form>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filterName: PropTypes.func.isRequired,
};