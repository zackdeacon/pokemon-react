import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/header"
import Pokedex from "./components/pokedex"
import Pokecard from "./components/pokecard"
import Wrapper from "./components/wrapper"


function App() {
  return (
    <>
    <Wrapper />
    <Button />
    <Pokedex />
    </>
  );
}

export default App;
