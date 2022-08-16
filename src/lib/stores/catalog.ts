import { defineStore } from "pinia";
import { PokemonResponse, PokemonResult } from "@/types/api";

export type CatalogState = {
  newArrivals: PokemonResult[];
};

export const useCatalog = defineStore("catalog-store", {
  state: () =>
    ({
      newArrivals: [],
    } as CatalogState),

  getters: {
    results: (state) => state.newArrivals,
  },

  actions: {
    async fetchingNewArrivals(): Promise<PokemonResponse> {
      return await fetch("https://pokeapi.co/api/v2/pokemon").then((response) =>
        response.json()
      );
    },
  },
});
