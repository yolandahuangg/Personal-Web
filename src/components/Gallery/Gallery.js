import React from 'react'
import './Gallery.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Images } from "./Images"

function Gallery() {
    return(
        <ResponsiveMasonry className='my__gallery' columnsCountBreakPoints={{350: 1, 900: 2, 1200: 3}}>
            <div id='gallery'>
            <Masonry gutter='15px'>
                {Images.map((image, i) => (
                    <img
                        key={i}
                        src={image.src}
                        style={{width: "100%", display: "block"}}
                        alt={image.alt}
                    />
                ))}
            </Masonry>
            </div>
        </ResponsiveMasonry>
    )
}

export default Gallery;