function GalleryList({list}) {
    return (
        <>
            {list.map(photo => 
                (<img src={photo.path} alt={photo.description} width="500" height="400"></img>)
                )}
        </>
    )
}
export default GalleryList;