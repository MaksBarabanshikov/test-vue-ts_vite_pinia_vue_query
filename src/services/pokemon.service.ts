import { PokemonResponse } from "@/types/api";

export const PokemonService = {
  async getPokemon(): Promise<PokemonResponse> {
    return await fetch("https://pokeapi.co/api/v2/pokemon").then((response) =>
      response.json()
    );
  },
};
