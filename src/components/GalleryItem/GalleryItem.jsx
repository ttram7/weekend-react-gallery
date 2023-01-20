import {useState} from 'react'
import './/GalleryItem.css';

function GalleryItem({photo}) {
    const [cssClass, setCssClass] = useState('visible');
    const [display, setDisplay] = useState(true);
    //toggle setDisplay -> true/false on/off

    const toggleDisplay = () => {
        console.log('in toggleDisplay')
        setDisplay(!display)
        console.log(display)
        //error: stops after false; react doesn't work with visibility
        if (display == true) {
            setCssClass('visible')
        } else {
            setCssClass('hidden')
        }
        console.log(cssClass)
    }
    // else, else if

    

    //const [description, setDescription];

    // const showDescription = (description) => {
    //     <p>{description}</p>
    //     console.log(description);
    // }

    //  if showDisplay is true -> show description

    const showDescription = (photo) => {
        photo.display = 'none';
        <p>{photo.description}</p>
        console.log(photo.description);
    }

    return(
        <div>
            {/*<img src={photo.path} alt={photo.description} width="500" height="400"
            onClick = {() => showDescription(photo.description)}></img>*/}
            {/*<img src={photo.path} alt={photo.description} width="500" height="400" class={display}
            onClick = {() => setDisplay('hidden')}></img>*/}
             <img src={photo.path} alt={photo.description} width="500" height="400" class={cssClass}
            onClick = {() => toggleDisplay()}></img>
        </div>
    )
}
export default GalleryItem;