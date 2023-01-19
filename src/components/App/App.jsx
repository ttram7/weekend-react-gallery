import React from 'react';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [photosList, setPhotosList] = useState([]);

  const getPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      setPhotosList(response.data);
    })
    .catch(function(error){
      console.log('error on GET:', error)
    });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
