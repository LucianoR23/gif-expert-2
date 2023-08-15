import { render, screen } from "@testing-library/react"
import { GifsGrid } from "../../src/components/GifsGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifsGrid', () => {

    const category = 'One Punch'

    test('debe mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifsGrid category={ category } />)
        
        expect( screen.getByText('Loading...') )
        expect( screen.getByText( category ) )

    })

    test('debe mostrar items cuando se cargan las imagenes de useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost.com'
            },
            {
                id: 'DEF',
                title: 'Tornado',
                url: 'https://localhost2.com'
            },

        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifsGrid category={ category } />)
        expect( screen.getAllByRole('img').length ).toBe(2)

    })

})