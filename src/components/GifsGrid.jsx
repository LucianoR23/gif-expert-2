import { GifsImages } from "./GifsImages"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifsGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Loading...</h2>)
            }
            <div className="card-grid">
                { images.map( (img) => ( <GifsImages key={img.id} { ...img } /> ) ) }
            </div>
        </>
    )
}
