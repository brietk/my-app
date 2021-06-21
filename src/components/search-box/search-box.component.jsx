import React from 'react';
import './search-box.styles.css';

//þetta er functional component. Hafa ekki aðgang að state eða constructor. 
//hafa heldur ekki aðgang að lifeCycleMethods.
//eina sem functional component gerir er að rendera html-i. 
//fær í sig props og gubbar út html

export const SearchBox = ({ handleChange }) => (
    <input 
        className='search' //til að hengja css-ið á.
        type='search'
        placeholder='Search monsters'
        onChange={handleChange}
    />
)