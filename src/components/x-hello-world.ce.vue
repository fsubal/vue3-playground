<script setup lang="ts">
import { ref } from 'vue'
import logo from "../assets/logo.png"

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h2>{{ msg }}</h2>

  <div>
    <!-- .ce.vue から別の .ce.vue を import すると CSS が読まれないらしい。 -->
    <!-- ので、register された x-〇〇 の方の名前で参照するのが現状では正しい（ただし議論中） -->
    <!-- https://github.com/vuejs/core/pull/4309#issuecomment-896886449 -->
    <x-avatar :src="logo">私です。</x-avatar>
  </div>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  @apply text-blue-400;
}

label {
  @apply mx-1 font-bold;
}

code {
  @apply bg-slate-200 py-1 px-2 rounded-md text-blue-900;
}
</style>
