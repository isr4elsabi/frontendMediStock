<template>
  <q-page class="flex flex-center column">

    <!-- Aquí mostraremos el mensaje de Laravel -->
    <h4 class="text-primary text-center q-mt-md">
      {{ mensajeBackend }}
    </h4>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../boot/axios'

const mensajeBackend = ref('Conectando con Laravel...')

onMounted(async () => {
  try {
    const respuesta = await api.get('/ping')
    mensajeBackend.value = respuesta.data.mensaje
  } catch (error) {
    console.error('Error de conexión:', error)
    mensajeBackend.value = 'Error al conectar. Revisa la consola (F12).'
  }
})
</script>