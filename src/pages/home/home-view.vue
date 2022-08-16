<template>
  <TopNavBar />
  <NewArrivals />
</template>
<script>
import TopNavBar from "@/components/pokemon-list.vue";
import NewArrivals from "@/components/NewArrivals.vue";

export default {
  components: {
    TopNavBar,
    NewArrivals,
  },

  data() {
    return {};
  },

  computed: {},
};
</script>

<style></style>
