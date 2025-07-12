<template>
  <DefaultLayout>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Registrarse</h2>
        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label class="block mb-1 text-sm font-medium">Nombre completo</label>
            <input type="text" v-model="name" class="w-full px-4 py-2 border rounded" required />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-medium">Correo electrónico</label>
            <input type="email" v-model="email" class="w-full px-4 py-2 border rounded" required />
          </div>
          <div class="mb-6">
            <label class="block mb-1 text-sm font-medium">Contraseña</label>
            <input type="password" v-model="password" class="w-full px-4 py-2 border rounded" required />
          </div>
          <button type="submit" class="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800">
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
    </DefaultLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  
  function handleRegister() {
    console.log('Registro:', name.value, email.value, password.value)
  }
  </script>
  