<template>
  <div class="home">
    <AdviceComponent />
  </div>
</template>

<script>
// @ is an alias to /src

import AdviceComponent from "@/components/AdviceComponent.vue";

export default {
  name: 'HomeView',
  components: {AdviceComponent},
}
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
