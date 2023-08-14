import { useState } from "react"
import { AddCategory, GifsGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Black Clover'] )

    const onAddCategory = ( onNewCategory ) => {
        const catLower = categories.map(c => c.toLowerCase())
        if( catLower.includes( onNewCategory.toLowerCase() ) ) return
        setCategories([ onNewCategory, ...categories ])
    }

    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
        onNewCategory={ onAddCategory }
        />

        {
            categories.map( (cat) => ( <GifsGrid key={ cat } category={ cat } /> ) )
        }
    </>
    )
}
