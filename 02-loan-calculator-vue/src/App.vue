<script setup>
  import {ref, computed} from 'vue';
  import Header from './components/Header.vue';
  import Button from './components/Button.vue';

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const cantidad = ref(10000);

  const formatearDinero = computed(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return formatter.format(cantidad.value);
  });

  const handleChangeDecremento = () => {
    const valor = cantidad.value - STEP;

    if (valor < MIN) {
      alert('Cantidad no válida')
      return;
    }

    cantidad.value = valor;
  };

  const handleChangeIncremento = () => {
    const valor = cantidad.value + STEP;

    if (valor > MAX) {
      alert('Cantidad no válida')
      return;
    }

    cantidad.value = valor;
  };

</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />

    <!-- Button - -->
    <div class="flex justify-between mt-10">
      <Button
        :operador="'-'" 
        :fn="handleChangeDecremento"
      />
      <Button
        :operador="'+'" 
        :fn="handleChangeIncremento"
      />
    </div>

    <div class="my-5">
      <input
        type="range"
        class="w-full accent-lime-500 hover:accent-lime-600"
        :step="STEP"
        :min="MIN"
        :max="MAX"
        v-model.number="cantidad"
      />
      <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {{formatearDinero}}
      </p>
    </div>

  </div>
</template>

