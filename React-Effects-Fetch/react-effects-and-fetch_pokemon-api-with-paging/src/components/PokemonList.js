import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(page);
        const data = await response.json();
        console.log(data)
        setPokemon(data.results);
        setNext(data.next);
        setPrev(data.previous);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [page]);

  function handlePrevButton () {
    if(prev) {
      setPage(prev)
    } else {
      console.log("No previous page")
    }
  }

  function handleNextButton () {
    if(next) {
      setPage(next)
    }
  }

  return (
    <main>
      <button type="button" onClick={handlePrevButton}>Previous Page</button>
      <button type="button" onClick={handleNextButton}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
