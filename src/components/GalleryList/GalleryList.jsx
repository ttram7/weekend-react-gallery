import GalleryItem from '../GalleryItem/GalleryItem';
import './/GalleryList.css'
function GalleryList({list, getPhotos}) {
    return (
        <div class = 'gallery-grid'>
            {list.map(photo => 
                (<GalleryItem photo={photo} getPhotos = {getPhotos} />)
            ) }
        </div>
    )
}
export default GalleryList;