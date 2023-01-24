import {useState} from 'react'
import axios from 'axios';
import './/GalleryItem.css';

function GalleryItem({photo, getPhotos}) {
    const [cssClass, setCssClass] = useState('visible');
    const [likeCount, setLikeCount] = useState(0);


    const toggleDisplay = () => {
        console.log('in toggleDisplay')
        if (cssClass === 'visible') {
            setCssClass('hidden')
        } else {
            setCssClass('visible')
        }
    }

//PUT request
const  increaseLikes = (id) => {
    console.log('in increaseLikes');
    
    axios({
        method: 'PUT',
        url: `/gallery/like/${id}`,
    })
    .then((response) => {
        console.log('PUT response from db: ', response)
        getPhotos();
    })
    .catch((error) => {
        console.log('error making PUT request: ', error);
    });
}
    

    return(
        <div>
            <div class = 'indv-photo'>
                <img src={photo.path} alt={photo.description} width="500" height="400" class={cssClass}
                id = {photo.id} onClick = {() => toggleDisplay()}></img>
                {cssClass === 'hidden' && <p class = "text">{photo.description}</p>}
             </div>
            <div class = 'like-section'>
                <button onClick = {() => increaseLikes(photo.id)}>like it</button>
                <p>{photo.likes} people like this</p>
                {/*<button onClick = {() => setLikesCount(likes + 1)}>like it</button>*/}
            </div>
            
        </div>
    )
}
export default GalleryItem;