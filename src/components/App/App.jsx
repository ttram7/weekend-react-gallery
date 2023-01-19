import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [photosList, setPhotosList] = useState([]);

  useEffect(() => {
    getPhotos();
  }, [])

  const getPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      setPhotosList(response.data);
      console.log('received data:', response.data)
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
        <GalleryList list = {photosList} />
        
      </div>
    );
}

export default App;
