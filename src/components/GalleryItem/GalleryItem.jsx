function GalleryItem({photo}) {
    return(
        <>
            <img src={photo.path} alt={photo.description} width="500" height="400"></img>
        </>
    )
}
export default GalleryItem;