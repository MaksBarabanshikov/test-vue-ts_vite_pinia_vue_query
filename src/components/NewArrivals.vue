<script setup>
import { useCatalog } from "@/lib/stores/catalog.js";
</script>

<template>

</template>

<script>
export default {
  computed: {
    ...mapState(useCatalog, {newArrivals: 'results'})
  },
  methods: {
    ...mapActions(useCatalog, ['fetchNewArrivals']),

    addToCart() {
      // we'll populate this later
    }
  },
  created() {
    // when the template is created, we call this action
    this.fetchNewArrivals();
  }
}
</script>

<style scoped>

</style>