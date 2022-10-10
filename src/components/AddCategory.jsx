import React, { useState } from 'react';


const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue( target.value )
    }

    const onSumit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories] );
        setinputValue('');
        onNewCategory(  inputValue.trim());
    }

    return (
    <form onSubmit={ (event) => onSumit(event)}>
    <input
        type= 'text'
        placeholder= 'Buscar Gifs'
        value={ inputValue }
        onChange= { onInputChange }    
    />
    </form>
  )
}

export default AddCategory