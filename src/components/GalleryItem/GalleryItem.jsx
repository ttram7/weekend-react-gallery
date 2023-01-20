import {useState} from 'react'
import './/GalleryItem.css';

function GalleryItem({photo}) {
    const [cssClass, setCssClass] = useState('visible');
    const [display, setDisplay] = useState(true);
    const [likeCount, setLikeCount] = useState(0);
    //toggle setDisplay -> true/false on/off

    const toggleDisplay = () => {
        console.log('in toggleDisplay')
        if (cssClass === 'visible') {
            setCssClass('hidden')
            // return(
            // <p>test description</p>
            //     )
            showDescription();
        } else {
            setCssClass('visible')
        }
        // setCssClass('hidden')
        // setDisplay(!display)
    
        //error: stops after false; react doesn't work with visibility
        // if (display == true) {
        //     setCssClass('visible')
        // } else {
        //     setCssClass('hidden')
        // }
        

    }
    // else, else if

    

    //const [description, setDescription];

    // const showDescription = (description) => {
    //     <p>{description}</p>
    //     console.log(description);
    // }

    //  if showDisplay is true -> show description

    const showDescription = () => {
        <p>hi</p>
        console.log('in showDiscription')
    //     photo.display = 'none';
    //     <p>{photo.description}</p>
    //     console.log(photo.description);
    }

    return(
        <div>
            {/*<img src={photo.path} alt={photo.description} width="500" height="400"
            onClick = {() => showDescription(photo.description)}></img>*/}
            {/*<img src={photo.path} alt={photo.description} width="500" height="400" class={display}
            onClick = {() => setDisplay('hidden')}></img>*/}
             <img src={photo.path} alt={photo.description} width="500" height="400" class={cssClass}
            onClick = {() => toggleDisplay()}></img>
            <p class="centered">Center</p>
            <button onClick = {() => setLikeCount(likeCount + 1)}>like it</button>
            {likeCount}
            
        </div>
    )
}
export default GalleryItem;