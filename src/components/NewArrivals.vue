<script setup lang="ts">
import { onMounted } from "vue";
// import { useCatalog } from "@/lib/stores/catalog";
// import { storeToRefs } from "pinia";
import { useQuery } from "vue-query";
import { PokemonService } from "@/services/pokemon.service";

// const catalogStore = useCatalog()

// const { newArrivals } = storeToRefs(useCatalog())

const { isLoading, isError, data, isSuccess, error } = useQuery("pokemon", () =>
  PokemonService.getPokemon()
);

onMounted(() => {
  console.log("mounted");

  // return catalogStore.fetchingNewArrivals()
});
</script>

<template>
  <p v-if="isLoading">Загрузка...</p>
  <ul v-if="isSuccess">
    <li v-for="item in data.results" :key="item.name">
      <span>{{ item.name }}</span>
    </li>
  </ul>
  <p v-if="isError">{{ error }}</p>
</template>
