import GalleryItem from '../GalleryItem/GalleryItem';
import './/GalleryList.css'
function GalleryList({list}) {
    return (
        <div class = 'gallery-grid'>
            {list.map(photo => 
                (<GalleryItem photo={photo} />)
            ) }
        </div>
    )
}
export default GalleryList;