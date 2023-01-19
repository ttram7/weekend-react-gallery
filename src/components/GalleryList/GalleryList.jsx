import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({list}) {
    return (
        <>
            {list.map(photo => 
                <GalleryItem photo={photo} />
            )}
        </>
    )
}
export default GalleryList;