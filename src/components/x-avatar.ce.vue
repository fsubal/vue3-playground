<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
  <div class="wrapper">
    <div class="avatar-icon">
      <img :src="src" alt="アイコン">
    </div>
    <div class="description">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply flex items-center gap-2 p-2;
  @apply bg-slate-100 rounded-sm;
  @apply border border-solid border-slate-200;
}

.avatar-icon img {
  @apply block w-12 aspect-square rounded-full bg-white;
}

.description {
  @apply flex-1 text-slate-700 font-semibold text-sm;
}
</style>
