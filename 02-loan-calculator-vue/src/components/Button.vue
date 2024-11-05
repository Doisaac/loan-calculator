<script setup>
  const props = defineProps({
    operador: String,
    fn: Function
  });
</script>

<template>
  <button
    type="button"
    class="h-10 w-10 flex justify-center items-center font-bold bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500 text-white text-lg"
    @click="fn"
  >
    {{ operador }}
  </button>
</template>
