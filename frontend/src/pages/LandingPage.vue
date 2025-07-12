<template>
  <DefaultLayout>
    <section class="bg-white relative overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 lg:px-8 gap-10">
        <!-- Columna izquierda: Texto -->
        <div class="max-w-xl pt-10 pb-10">
          <h1 class="text-5xl mb-5 font-extrabold text-gray-900 mb-4 leading-tight">
            {{ $t('landing.title.line1') }} <br class="hidden md:block" />
            {{ $t('landing.title.line2') }}
          </h1>
          <p class="text-xl text-gray-700 mb-5">
            {{ $t('landing.description') }}
          </p>
          <div>&nbsp;</div>
          <RouterLink
        to="/register"
        class="text-base mt-5 px-4 py-3 bg-black text-white rounded hover:bg-gray-900"
      >
        {{ $t('landing.cta') }}
      </RouterLink>
        </div>

        <!-- Columna derecha: Imagen -->
        <div class="w-full h-full flex justify-end">
          <img
            src="/src/assets/web-developer-header.webp"
            alt="Vista previa de la aplicación"
            class="max-h-[600px] w-full object-contain"
          />
        </div>
      </div>
    </section>
    <section class="bg-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Título -->
        <h2 class="text-4xl font-extrabold text-gray-900 mb-4">
          {{ $t('benefits.title') }}
        </h2>
        <!-- Descripción -->
        <p class="text-gray-600 text-xl mb-12">
          {{ $t('benefits.description') }}
        </p>
  
        <!-- Iconos con beneficios -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <!-- Beneficio 1 -->
          <div class="flex flex-col items-center">
            <img src="/src/assets/icons/analytics.svg" alt="Analytics" class="h-16 w-16 mb-4" />
            <h3 class="text-xl font-semibold text-gray-800">{{ $t('benefits.analytics.title') }}</h3>
            <p class="text-gray-600 text-xm mt-2">{{ $t('benefits.analytics.description') }}</p>
          </div>
          <!-- Beneficio 2 -->
          <div class="flex flex-col items-center">
            <img src="/src/assets/icons/schedule.svg" alt="Scheduler" class="h-16 w-16 mb-4" />
            <h3 class="text-xl font-semibold text-gray-800">{{ $t('benefits.scheduler.title') }}</h3>
            <p class="text-gray-600 text-xm mt-2">{{ $t('benefits.scheduler.description') }}</p>
          </div>
          <!-- Beneficio 3 -->
          <div class="flex flex-col items-center">
            <img src="/src/assets/icons/team.svg" alt="Collaboration" class="h-16 w-16 mb-4" />
            <h3 class="text-xl font-semibold text-gray-800">{{ $t('benefits.team.title') }}</h3>
            <p class="text-gray-600 text-xm mt-2">{{ $t('benefits.team.description') }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Texto -->
      <div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {{ $t('hero2.title') }}
        </h2>
        <p class="text-xl font-semibold text-gray-800 mb-4">
          {{ $t('hero2.subtitle') }}
        </p>
        <p class="text-base text-gray-700 mb-8">
          {{ $t('hero2.description') }}
        </p>
        <RouterLink
        to="/register"
        class="text-base px-4 py-3 bg-black text-white rounded hover:bg-gray-900 whitespace-nowrap"
      >
        {{ $t('landing.cta') }}
      </RouterLink>
      </div>

      <!-- Imagen -->
      <div class="w-full h-auto">
        <img
          src="/src/assets/hero-section-analytics.webp"
          alt="App analytics preview"
          class="w-full h-auto object-contain"
        />
      </div>

    </div>
  </section>
  <section class="bg-gray-100 mb-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Formulario -->
      <div class="py-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-base text-gray-700 mb-8">
          {{ $t('contact.description') }}
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-6 bg-white p-6 rounded-lg shadow-md">
         
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('contact.email') }}</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('contact.message') }}</label>
            <textarea
              v-model="form.message"
              required
              rows="4"
              class="w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            {{ $t('contact.submit') }}
          </button>
        </form>
      </div>

      <!-- Imagen -->
      <div class="w-full h-full flex items-end">
        <img
          src="/src/assets/atencion-clientes.webp"
          alt="Support illustration"
          class="mx-auto object-contain"
        />
      </div>

    </div>
  </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const form = ref({
  name: '',
  email: '',
  message: '',
})

function handleSubmit() {
  // Aquí puedes manejar el envío del formulario (por ejemplo, a un backend o API)
  alert('Consulta enviada correctamente. ¡Gracias!')
}
</script>
