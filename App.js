import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './components/Container';
import Characters from './components/Characters';
import Home from './components/Home';
import Infochar from './components/Infochar';

function App() {
  // declaring constant and inicializing state
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    async function fetchCharacters(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setCharacters(data.results); 
    }

    fetchCharacters();
  },[])
  console.log('characters', characters); // TESTS
  console.log('data', characters); //TESTS

  return(
    <Container>
      <Home />
    </Container>
  );
}

export default App;



