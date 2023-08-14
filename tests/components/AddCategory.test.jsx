import { fireEvent, render, screen } from "@testing-library/react"
import { AddCattegory } from "../../src/components/AddCattegory"

describe('Probando AddCategory.jsx', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCattegory onNewCategory={ () => {} } />)
        const input = screen.getByRole('textbox')

        fireEvent.input( input, { target: { value: 'Saitama'} } )

        expect( input.value ).toBe('Saitama')
    })

})