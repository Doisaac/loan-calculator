<script setup>
  import {ref} from 'vue';
  import Header from './components/Header.vue';

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const cantidad = ref(10000);

  function handleChange(e) {
    cantidad.value = +e.target.value;
  }
</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />

    <div class="my-5">
      <input
        type="range"
        class="w-full accent-lime-500 hover:accent-lime-600"
        @input="handleChange"
        :value="cantidad"
        :step="STEP"
        :min="MIN"
        :max="MAX"
      />
      <p class="font-bold text-center text-2xl">
        {{ cantidad }}
      </p>
    </div>
    
  </div>
</template>

