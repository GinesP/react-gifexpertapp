import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const hanbleInputChange = (e) => {
        
        setInputValue( e.target.value );

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('Submit hecho', inputValue);

        if(inputValue.trim().length>2){
            setCategories( cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
                type="text"
                value= { inputValue }
                onChange={ hanbleInputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
