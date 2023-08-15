import { render, screen } from "@testing-library/react"
import { GifsImages } from "../../src/components/GifsImages"


describe('Probando GifsImages component', () => {
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe hacer match con el snapshot', () => {

        const { container } = render( <GifsImages title={title} url={url} /> )
        expect( container ).toMatchSnapshot()

    })

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifsImages title={title} url={url} /> )
        // expect( screen.getByRole('img').src ).toBe( url )
        // expect( screen.getByRole('img').alt ).toBe( title )
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )

    })

})