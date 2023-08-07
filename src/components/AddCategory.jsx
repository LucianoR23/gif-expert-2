import { useState } from "react"


export const AddCategory = ({ setCategories, cat }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if( inputValue.trim().length <= 4 ) return;

        setCategories(cat => [ inputValue, ...cat ])
        setInputValue('')
        
    }

    return (
        <form onSubmit={ onSubmit } >
            <input type="text" placeholder="Buscar GIFs" value={ inputValue } onChange={ onInputChange } />
        </form>
    )
}
