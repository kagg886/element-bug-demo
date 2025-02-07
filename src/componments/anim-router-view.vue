<script setup lang="ts">

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-active {
  animation: bounce-in 0.2s;
}

.fade-leave-active {
  animation: bounce-out 0.2s reverse;
}

@keyframes bounce-in {
  from {
    opacity: 0;
  }
}

@keyframes bounce-out {
  from {
    opacity: 1;
  }
}
</style>