import React, { Component, useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Container from './components/Container';
import Characters from './components/Characters';
//import Infochar from './components/Infochar';

function App() {
  // declaring constant and inicializing state
  const [characters, setCharacters] = useState([]);
  //const [loading, setLoading] = useState(true); // tiene que cambiar de estado para mostrarse PRESCINDIBLE
  const [images, setImages] = useState([]);

  const listChar 
  useEffect(()=>{
    async function fetchCharacters(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setCharacters(data.results); 
    }

    async function fetchImages(){
      let res = await fetch('./images');
    }
  

    fetchCharacters();
    setLoading(false)
  },[])
  console.log('characters', characters); // TESTS
  console.log('data', characters); //TESTS

  return(
    <Container>
      <Characters data={ characters } />      
    </Container>
  );
}

export default App;


// {loading ? (
//   <ActivityIndicator size="large" />
// ) : (
// <Characters data={ characters } />
// )}
