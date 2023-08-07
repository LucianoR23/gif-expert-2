import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Solo Leveling', 'Naruto'] )

    const onAddCategory = () => {
        setCategories([ ...categories ])
    }

    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory setCategories={ setCategories } />

        <ol>
            {
                categories.map( cat => {
                    return <li key={ cat }>{ cat }</li>
                })
            }
        </ol>
    </>
    )
}
